import gql from "graphql-tag";

// user
export const SIGN_UP = gql`
  mutation SIGN_UP(
    $firstname: String!
    $lastname: String!
    $username: String!
    $email: String!
    $password: String!
  ) {
    signup(
      firstname: $firstname
      lastname: $lastname
      username: $username
      email: $email
      password: $password
    ) {
      id
      username
      email
      createdAt
    }
  }
`;

export const SIGN_IN = gql`
  mutation SIGN_IN($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      user {
        id
        username
        firstname
        lastname
        email
        tel
        lineid
        province
        district
        subdistrict
        zipcode
        roles
        createdAt

        subcontracts {
          id
          status
          createdAt
        }
        hirecontracts {
          id

          status
          createdAt
        }
        task {
          id
        }
      }
      jwt
    }
  }
`;

export const REQUESTRESETPASSWORD = gql`
  mutation REQUESTRESETPASSWORD($email: String!) {
    requestresetpassword(email: $email) {
      message
    }
  }
`;

export const RESETPASSWORD = gql`
  mutation RESETPASSWORD($password: String!, $token: String!) {
    resetpassword(password: $password, token: $token) {
      message
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UPDATE_USER(
    $id: ID!
    $firstname: String
    $lastname: String
    $lineid: String
    $tel: String
    $province: String
    $district: String
    $subdistrict: String
    $zipcode: String
  ) {
    updateduserprofile(
      id: $id
      firstname: $firstname
      lastname: $lastname
      tel: $tel
      lineid: $lineid
      province: $province
      district: $district
      subdistrict: $subdistrict
      zipcode: $zipcode
    ) {
      id
      username
      firstname
      lastname
      tel
      email
      lineid
      province
      district
      subdistrict
      zipcode

      subcontracts {
        id
      }
      hirecontracts {
        id
      }
      task {
        id
      }
    }
  }
`;
// subcontracts
export const CREATE_SUBCONTRACT = gql`
  mutation CREATE_SUBCONTRACT(
    $topic: String!
    $typeofwork: String!
    $detail: String
    $duration: Int!
    $startbudget: Float!
    $province: String!
  ) {
    createsubcontract(
      topic: $topic
      typeofwork: $typeofwork
      detail: $detail
      duration: $duration
      startbudget: $startbudget
      province: $province
    ) {
      id
      topic
      typeofwork
      detail
      duration
      startbudget
      province
      status
      createdAt
      subcontractCreatorId {
        id
        username
      }
    }
  }
`;

export const UPDATE_SUBCONTRACT = gql`
  mutation UPDATE_SUBCONTRACT(
    $id: ID!
    $accountnumber: String
    $budget: Int!
    $district: String
    $email: String
    $idcard: String
    $lineid: String
    $member: Int
    $nameofaccount: String
    $nameofbank: String
    $name: String
    $natureofwork: String
    $promptpay: String
    $province: String
    $skill: String
    $subdistrict: String
    $tel: String
    $username: String
    $yearskill: Int
    $zip: String
  ) {
    updatesubcontract(
      id: $id
      accountnumber: $accountnumber
      budget: $budget
      district: $district
      email: $email
      idcard: $idcard
      lineid: $lineid
      member: $member
      nameofaccount: $nameofaccount
      nameofbank: $nameofbank
      name: $name
      natureofwork: $natureofwork
      promptpay: $promptpay
      province: $province
      skill: $skill
      subdistrict: $subdistrict
      tel: $tel
      username: $username
      yearskill: $yearskill
      zip: $zip
    ) {
      id
      name
      username
      email
      skill
      natureofwork
      yearskill
      tel
      member
      idcard
      budget
      lineid
      province
      district
      subdistrict
      zip
      nameofbank
      accountnumber
      nameofaccount
      promptpay
      status
      createdAt
    }
  }
`;

export const DELETE_SUBCONTRACT = gql`
  mutation DELETE_SUBCONTRACT($id: ID!) {
    deletesubcontract(id: $id) {
      id
    }
  }
`;

export const CREATE_HIRECONTRACT = gql`
  mutation CREATE_HIRECONTRACT(
    $topic: String!
    $detail: String!
    $typeofwork: String!
    $budget: Float!
    $province: String!
    $duration: Int!
  ) {
    createhirecontract(
      topic: $topic
      detail: $detail
      typeofwork: $typeofwork
      budget: $budget
      province: $province
      duration: $duration
    ) {
      id
      topic
      detail
      typeofwork
      budget
      province
      duration
      status
      createdAt
      hirecontractCreatorId {
        id
        username
        email
      }
    }
  }
`;

export const UPDATE_HIRECONTRACT = gql`
  mutation UPDATE_HIRECONTRACT(
    $id: ID!
    $condition: String
    $detail: String
    $typeofwork: String
    $budget: Float
    $zone: String
    $duration: Float
  ) {
    updatehirecontract(
      id: $id
      condition: $condition
      detail: $detail
      typeofwork: $typeofwork
      budget: $budget
      zone: $zone
      duration: $duration
    ) {
      id
      condition
      detail
      typeofwork
      budget
      zone
      duration
    }
  }
`;

export const DELETE_HIRECONTRACT = gql`
  mutation DELETE_HIRECONTRACT($id: ID!) {
    deletehirecontract(id: $id) {
      id
    }
  }
`;

export const ASSIGN_HIRECONTRACT = gql`
  mutation ASSIGN_HIRECONTRACT(
    $id: ID!
    $subcontractAcceptHirecontractId: ID!
  ) {
    assignsubtohire(
      id: $id
      subcontractAcceptHirecontractId: $subcontractAcceptHirecontractId
    ) {
      id
    }
  }
`;

export const SUBCONTRACT_ACCEPTHIRECONTRACT = gql`
  mutation SUBCONTRACT_ACCEPTHIRECONTRACT($id: ID!) {
    subcontractacceptwork(id: $id) {
      id
    }
  }
`;

export const SUBCONTRACT_DENIEDTHIRECONTRACT = gql`
  mutation SUBCONTRACT_DENIEDTHIRECONTRACT($id: ID!) {
    subcontractdeniedwork(id: $id) {
      id
    }
  }
`;
