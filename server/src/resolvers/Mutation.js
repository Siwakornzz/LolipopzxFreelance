import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { randomBytes } from "crypto";
import sgMail from "@sendgrid/mail";
import Subcontract from "../models/subcontract";
import Hirecontract from "../models/hirecontract";
import User from "../models/User";
import Task from "../models/task";

export const Mutation = {
  // User
  signup: async (parent, args, context, info) => {
    // trim and lowercase email
    const email = args.email.trim().toLowerCase();
    const firstname = args.firstname.trim().toLowerCase();
    const lastname = args.lastname.trim().toLowerCase();
    // check if email already exists
    const currentUser = await User.find({});
    const isEmailExist =
      currentUser.findIndex((user) => user.email === email) > -1;

    if (isEmailExist) {
      throw new Error("อีเมล์นี้มีผู้ใช้งานแล้ว !");
    }
    // validate password
    if (args.password.trim().length < 6) {
      throw new Error("Password must be at least 6 characters");
    }

    const password = await bcrypt.hash(args.password, 10);
    const newUser = await User.create({
      ...args,
      email,
      firstname,
      lastname,
      password,
    });

    return newUser;
  },

  signin: async (parent, args, context, info) => {
    const { email, password } = args;

    // check email is in the database ?
    const user = await User.findOne({ email })
      .populate({
        path: "subcontracts",
        populate: { path: "subcontractCreatorId" },
      })
      .populate({
        path: "hirecontracts",
        populate: { path: "hirecontractCreatorId" },
      })
      .populate({
        path: "task",
        options: { sort: { createdAt: "asc" } },
        populate: [{ path: "subcontract" }, { path: "hirecontract" }],
      });

    if (!user) {
      throw new Error("ไม่พบข้อมูลผู้ใช้งาน โปรดลงทะเบียน !");
    }

    // check if password is matching ?
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      throw new Error("อีเมล์ หรือ รหัสผ่านผิดพลาด !");
    }
    const token = jwt.sign({ userId: user.id }, process.env.COOKIE_SECRET, {
      expiresIn: "7days",
    });

    return { user, jwt: token };
  },

  updateduserprofile: async (parent, args, { userId }, info) => {
    const {
      id,
      firstname,
      lastname,
      tel,
      lineid,
      district,
      subdistrict,
      province,
      zipcode,
    } = args;

    if (!userId) throw new Error("User not logged in !!");

    const user = await User.findById(userId);
    if (user.roles !== "Admin") {
      if (userId !== user.id) {
        throw new Error("You are not Authorized to update this hirecontract");
      }
    }

    const updateinfo = {
      firstname: !!firstname ? firstname : user.firestname,
      lastname: !!lastname ? lastname : user.lastname,
      tel: !!tel ? tel : user.tel,
      lineid: !!lineid ? lineid : user.lineid,
      district: !!district ? district : user.district,
      subdistrict: !!subdistrict ? subdistrict : user.subdistrict,
      province: !!province ? province : user.province,
      zipcode: !!zipcode ? zipcode : user.zipcode,
    };

    await User.findByIdAndUpdate(id, updateinfo);

    const updatedUser = await User.findById(id)
      .populate({
        path: "subcontracts",
      })
      .populate({
        path: "hirecontracts",
      })
      .populate({
        path: "task",
      });

    return updatedUser;
  },

  requestresetpassword: async (parent, { email }, context, info) => {
    // find user in the database
    const user = await User.findOne({ email });

    // if no user throw error :)
    if (!user) {
      throw new Error("ไม่พบข้อมูลผู้ใช้งานในระบบ โปรดลงทะเบียน !");
    }

    // create Resetpasswordtoken and resetpasswordtokenexpiry
    const resetPasswordToken = randomBytes(32).toString("hex");
    const resetTokenExpiry = Date.now() + 30 * 60 * 1000;

    // save both resetpasswordtoken and tokenexpiry in the database (update user )
    await User.findByIdAndUpdate(user.id, {
      resetPasswordToken,
      resetTokenExpiry,
    });
    // send link resetpassword to user email address
    // setSendgrid Api Key
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const message = {
      from: "Siwakornzz@hotmail.com",
      to: user.email,
      subject: "Reset Password From Lolipopz",
      html: `
      <style>
      @import url("https://fonts.googleapis.com/css2?family=Kanit:wght@500&display=swap");
      * {
        font-family: "Kanit", sans-serif;
      }
    </style>
    <body
      marginheight="0"
      topmargin="0"
      marginwidth="0"
      style="margin: 0px; background-color: #f2f3f8"
      leftmargin="0"
    >
      <!--100% body table-->
      <table
        cellspacing="0"
        border="0"
        cellpadding="0"
        width="100%"
        bgcolor="#f2f3f8"
      >
        <tr>
          <td>
            <table
              style="background-color: #f2f3f8; max-width: 670px; margin: 0 auto"
              width="100%"
              border="0"
              align="center"
              cellpadding="0"
              cellspacing="0"
            >
              <tr>
                <td style="height: 80px">&nbsp;</td>
              </tr>
              <tr>
                <td style="text-align: center">
                  <img
                    src="https://www.infomazeelite.com/wp-content/uploads/2022/02/Outsource-IT-Help-Desk-Services.png"
                    height="160"
                    width="220"
                  />
                </td>
              </tr>
              <tr>
                <td style="height: 20px">&nbsp;</td>
              </tr>
              <tr>
                <td>
                  <table
                    width="95%"
                    border="0"
                    align="center"
                    cellpadding="0"
                    cellspacing="0"
                    style="
                      max-width: 670px;
                      background: #fff;
                      border-radius: 3px;
                      text-align: center;
                      -webkit-box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06);
                      -moz-box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06);
                      box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06);
                    "
                  >
                    <tr>
                      <td style="height: 40px">&nbsp;</td>
                    </tr>
                    <tr>
                      <td style="padding: 0 35px">
                        <h1
                          style="
                            color: #1e1e2d;
                            font-weight: 500;
                            margin: 0;
                            font-size: 32px;
                          "
                        >
                          คุณได้ขอรีเซ็ตรหัสผ่านของคุณ ?
                        </h1>
                        <span
                          style="
                            display: inline-block;
                            vertical-align: middle;
                            margin: 29px 0 26px;
                            border-bottom: 1px solid #cecece;
                            width: 100px;
                          "
                        ></span>
                        <p
                          style="
                            color: #455056;
                            font-size: 15px;
                            line-height: 24px;
                            margin: 0;
                          "
                        >
                          เราไม่สามารถเพียงแค่ส่งรหัสผ่านเก่าของคุณ
                          มีการสร้างลิงก์เฉพาะสำหรับรีเซ็ตรหัสผ่านของคุณแล้ว
                          หากต้องการรีเซ็ตรหัสผ่าน
                          ให้คลิกลิงก์ต่อไปนี้และทำตามคำแนะนำ
                        </p>
                        <a
                          href="http://localhost:3000/signin/resetpassword?resetToken=${resetPasswordToken}"
                          target="blank"
                          style="
                            background: #20e277;
                            text-decoration: none !important;
                            font-weight: 500;
                            margin-top: 35px;
                            color: #fff;
                            text-transform: uppercase;
                            font-size: 14px;
                            padding: 10px 24px;
                            display: inline-block;
                            border-radius: 50px;
                          "
                          >Reset Password</a
                        >
                      </td>
                    </tr>
                    <tr>
                      <td style="height: 40px">&nbsp;</td>
                    </tr>
                  </table>
                </td>
              </tr>
    
              <tr>
                <td style="height: 20px">&nbsp;</td>
              </tr>
              <tr>
                <td style="text-align: center">
                  <p
                    style="
                      font-size: 14px;
                      color: rgba(69, 80, 86, 0.7411764705882353);
                      line-height: 18px;
                      margin: 0 0 0;
                    "
                  >
                    &copy; <strong>www.LOLIPOPZXFREELANCER.com</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td style="height: 80px">&nbsp;</td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    
      `,
    };

    sgMail.send(message);

    // return message to user in frontend

    return { message: "Please check your email address to resetpassword !" };
  },

  resetpassword: async (parent, { password, token }, context, info) => {
    // find user in the database by resetToken
    const user = await User.findOne({ resetPasswordToken: token });

    // if no user found in the database throw an error
    if (!user) throw new Error("Token ผิดพลาด, ไม่สามารถเปลี่ยนรหัสผ่านได้");

    // check if token is expired
    const isTokenExpired = user.resetTokenExpiry < Date.now();

    // if token is invalid and expired throw an error
    if (isTokenExpired)
      throw new Error("Token ผิดพลาด, ไม่สามารถเปลี่ยนรหัสผ่านได้");

    // hash new password
    const hashedPassword = await bcrypt.hash(password, 10);

    // update user in the database  (save new password hashed & delete resetToken and tokenExpiry)
    await User.findByIdAndUpdate(user.id, {
      password: hashedPassword,
      resetPasswordToken: null,
      resetTokenExpiry: null,
    });
    // return message
    return { message: "เปลี่ยนรหัสผ่านสำเร็จเรียบร้อย" };
  },

  // subcontracts
  createsubcontract: async (parent, args, { userId }, info) => {
    // check  is user loggedin ?
    if (!userId) {
      throw new Error("ยังไม่ได้เข้าสู่ระบบ โปรดเข้าสู่ระบบ !");
    }

    const subcontract = await Subcontract.create({
      ...args,
      subcontractCreatorId: userId,
    });
    const user = await User.findById(userId);

    if (!user.subcontracts) {
      user.subcontracts = [subcontract];
    } else {
      user.subcontracts.push(subcontract);
    }

    await user.save();
    const newSubcontract = await Subcontract.findById(subcontract.id).populate({
      path: "subcontractCreatorId",
      populate: { path: "subcontracts" },
    });

    return newSubcontract;
  },

  updatesubcontract: async (parent, args, { userId }, info) => {
    // destructure
    const { id, topic, typeofwork, detail, duration, startbudget, province } =
      args;
    console.log(id);
    // check if user loggedIn
    if (!userId) {
      throw new Error("User not logged in");
    }
    const subcontract = await Subcontract.findById(id);

    // check if user is the owner of the subcontract or admin
    // const userId = "62cc9a5ec9bd1e07307ede3b";
    const user = await User.findById(userId);

    if (user.roles !== "Admin") {
      if (userId !== subcontract.subcontractCreatorId.toString()) {
        throw new Error("You are not Authorized to update this subcontract");
      }
    }

    // Form update information
    const updateinfo = {
      topic: !!topic ? topic : subcontract.topic,
      typeofwork: !!typeofwork ? typeofwork : subcontract.typeofwork,
      detail: !!detail ? detail : subcontract.detail,
      duration: !!duration ? duration : subcontract.duration,
      startbudget: !!startbudget ? startbudget : subcontract.startbudget,
      province: !!province ? province : subcontract.province,
    };

    // update subcontract in the database
    await Subcontract.findByIdAndUpdate(id, updateinfo);

    // find  the updated subcontract
    const updatedsubcontract = await Subcontract.findById(id).populate({
      path: "subcontractCreatorId",
      populate: { path: "subcontracts" },
    });

    return updatedsubcontract;
  },

  deletesubcontract: async (parent, args, { userId }, info) => {
    const { id } = args;

    // find subcontract from given id
    const subcontract = await Subcontract.findById(id);
    const subcontractCreatorId = subcontract.subcontractCreatorId;

    // check if user loggedIn
    if (!userId) {
      throw new Error("User not logged in");
    }
    //  find user id from request  -> find user
    // const userId = "62cc9a5ec9bd1e07307ede3b";

    const user = await User.findById(userId);
    // check ownership of the subcontract or admin
    if (user.roles !== "Admin") {
      if (userId !== subcontract.subcontractCreatorId.toString()) {
        throw new Error("You are not Authorized to update this subcontract");
      }
    }
    // delete subcontract
    const deleteSubcontract = await Subcontract.findByIdAndRemove(id);
    // remove subcontractId from users
    const updatedusersubcontracts = user.subcontracts.filter(
      (subcontractsId) =>
        subcontractsId.toString() !== deleteSubcontract.id.toString()
    );
    await User.findByIdAndUpdate(subcontractCreatorId, {
      subcontracts: updatedusersubcontracts,
    });
    return deleteSubcontract;
  },

  adminacceptsubcontract: async (parent, args, { userId }, info) => {
    const id = args.id;

    if (!userId) throw new Error("You Not Authorized !");
    const user = await User.findById(userId);
    if (user.roles !== "Admin") throw new Error("You Not Authorized !");
    const subcontract = await Subcontract.findById(id);
    console.log(subcontract);

    subcontract.status = "APPROVE";

    await subcontract.save();
    return subcontract;
  },

  admindeniedsubcontract: async (parent, args, { userId }, info) => {
    const id = args.id;

    if (!userId) throw new Error("You Not Authorized !");
    const user = await User.findById(userId);
    if (user.roles !== "Admin") throw new Error("You Not Authorized !");
    const subcontract = await Subcontract.findById(id);

    subcontract.status = "DENIED";

    await subcontract.save();
    return subcontract;
  },

  // hirecontracts

  createhirecontract: async (parent, args, { userId }, info) => {
    // check  is user loggedin ?
    if (!userId) {
      throw new Error("ยังไม่ได้เข้าสู่ระบบ โปรดเข้าสู่ระบบ !");
    }

    const hirecontract = await Hirecontract.create({
      ...args,
      hirecontractCreatorId: userId,
    });
    const user = await User.findById(userId);

    if (!user.hirecontracts) {
      user.hirecontracts = [hirecontract];
    } else {
      user.hirecontracts.push(hirecontract);
    }

    await user.save();
    const newHirecontract = await Hirecontract.findById(
      hirecontract.id
    ).populate({
      path: "hirecontractCreatorId",
      populate: { path: "hirecontracts" },
    });

    return newHirecontract;
  },

  updatehirecontract: async (parent, args, { userId }, info) => {
    const { id, topic, detail, typeofwork, budget, province, duration } = args;
    console.log(id);
    // check if user loggedIn
    if (!userId) {
      throw new Error("User not logged in");
    }
    const user = await User.findById(userId);
    const hirecontract = await Hirecontract.findById(id);

    // check if user is the owner of the subcontract
    // const userId = "62cc9a5ec9bd1e07307ede3b";

    if (user.roles !== "Admin") {
      if (userId !== hirecontract.hirecontractCreatorId.toString()) {
        throw new Error("You are not Authorized to update this hirecontract");
      }
    }

    // Form update information
    const updateinfo = {
      topic: !!topic ? topic : hirecontract.topic,
      detail: !!detail ? detail : hirecontract.detail,
      typeofwork: !!typeofwork ? typeofwork : hirecontract.typeofwork,
      budget: !!budget ? budget : hirecontract.budget,
      province: !!province ? province : hirecontract.province,
      duration: !!duration ? duration : hirecontract.duration,
    };

    // update subcontract in the database
    await Hirecontract.findByIdAndUpdate(id, updateinfo);

    // find  the updated subcontract
    const updatedhirecontract = await Hirecontract.findById(id).populate({
      path: "hirecontractCreatorId",
      populate: { path: "hirecontracts" },
    });
    return updatedhirecontract;
  },

  deletehirecontract: async (parent, args, { userId }, info) => {
    const { id } = args;

    // find subcontract from given id
    const hirecontract = await Hirecontract.findById(id);
    const hirecontractCreatorId = hirecontract.hirecontractCreatorId;
    // check if user loggedIn
    if (!userId) {
      throw new Error("User not logged in");
    }
    //  find user id from request  -> find user
    // const userId = "62cc9a5ec9bd1e07307ede3b";

    const user = await User.findById(userId);

    // check ownership of the subcontract
    if (user.roles !== "Admin") {
      if (userId !== hirecontract.hirecontractCreatorId.toString()) {
        throw new Error("Not authorized to delete this hirecontract");
      }
    }

    // delete subcontract
    const deleteHirecontract = await Hirecontract.findByIdAndRemove(id);

    // remove subcontractId from users
    const updateuserhirecontract = user.hirecontracts.filter(
      (hirecontractsId) =>
        hirecontractsId.toString() !== deleteHirecontract.id.toString()
    );
    await User.findByIdAndUpdate(hirecontractCreatorId, {
      hirecontracts: updateuserhirecontract,
    });
    return deleteHirecontract;
  },

  // matching

  // assign subcontractCreatorId to hirecontract collection

  assignsubtohire: async (parent, args, { userId }, info) => {
    const id = args.id;
    const subcontractCreatorId = args.subcontractCreatorId;
    const subcontractId = args.subcontractAcceptHirecontractId;

    if (!userId) throw new Error("You Not Authorized !");

    const user = await User.findById(userId);

    if (user.roles !== "Admin") throw new Error("You Not Authorized !");

    const hirecontract = await Hirecontract.findById(id);

    const newTask = await Task.create({
      subcontract: subcontractId,
      hirecontract: id,
      subcontractCreatorId: subcontractCreatorId,
    });

    hirecontract.status = "กำลังรอการตอบรับจากผู้รับเหมาช่วง";

    await hirecontract.save();

    const subcontractCreator = await User.findById(subcontractCreatorId);
    if (!subcontractCreator.task) {
      subcontractCreator.task = [newTask];
    } else {
      subcontractCreator.task.push(newTask);
    }

    await subcontractCreator.save();

    return newTask;
  },

  subcontractacceptwork: async (parent, args, context, info) => {
    const id = args.id;

    const hirecontract = await Hirecontract.findById(id);

    hirecontract.status = "ผู้รับเหมาช่วงยืนยันรับงานแล้วกำลังทำงาน";

    await hirecontract.save();

    const assignStatus = await Hirecontract.findById(id);

    return assignStatus;
  },

  subcontractdeniedwork: async (parent, args, context, info) => {
    const id = args.id;
    const hirecontract = await Hirecontract.findById(id);

    hirecontract.status = "ผู้รับเหมาช่วงปฎิเสธการรับงาน";

    await hirecontract.save();

    const assignStatus = await Hirecontract.findById(id);

    return assignStatus;
  },

  deletesubcontract2: async (parent, args, context, info) => {
    const id = args.id;
    const subcontract = await Subcontract.findById(id);

    subcontract.status = "ผู้ว่าจ้างลบข้อมูล";

    await subcontract.save();

    const deletesubcontract = await Subcontract.findById(id);

    return deletesubcontract;
  },

  deletehirecontract2: async (parent, args, context, info) => {
    const id = args.id;
    const hirecontract = await Hirecontract.findById(id);

    hirecontract.status = "ผู้ว่าจ้างลบข้อมูล";

    await hirecontract.save();

    const assignStatus = await Hirecontract.findById(id);

    return assignStatus;
  },

  subcontractfinishjob: async (parent, args, context, info) => {
    const id = args.id;
    const hirecontract = await Hirecontract.findById(id);

    hirecontract.status = "งานที่จ้างเข้ามาทำเสร็จเรียบร้อยแล้ว";

    await hirecontract.save();

    const assignStatus = await Hirecontract.findById(id);

    return assignStatus;
  },
};
