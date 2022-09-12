import gql from "graphql-tag";

// user
export const Me = gql`
  query ME {
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
        topic
        typeofwork
        detail
        duration
        startbudget
        province
        status
        createdAt
      }
      hirecontracts {
        id
        topic
        typeofwork
        detail
        duration
        budget
        status
        createdAt
      }
      task {
        id
        subcontract {
          id
          topic
        }
        hirecontract {
          id
          topic
          typeofwork
          budget
          status
        }
      }
    }
  }
`;

export const QUERY_USERS = gql`
  query QUERY_USERS {
    users {
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
        topic
        typeofwork
        detail
        duration
        startbudget
        province
        status
        createdAt
      }
      hirecontracts {
        id
        topic
        typeofwork
        detail
        duration
        budget
        status
        createdAt
      }
      task {
        id
      }
    }
  }
`;

export const QUERY_USER = {
  query: `
    query {
      user {
        id
        username
        firstname
        lastname
        email
        tel
        lineid
        province
        subdistrict
        district
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
        task{
          id
          subcontract{
            id
          }
          hirecontract{
            id
          }
        }
      }
    }
  `,
};

// subcontract
// query one by one
export const QUERY_SUBCONTRACT = gql`
  query QUERY_SUBCONTRACT($id: ID!) {
    subcontract(id: $id) {
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
        email
        tel
        lineid
      }
    }
  }
`;

export const QUERY_REQUESTMATCHING = gql`
  query QUERY_REQUESTMATCHING(
    $id: ID!
    $typeofwork: String!
    $budget: Float!
    $province: String!
  ) {
    requestmatching(
      id: $id
      typeofwork: $typeofwork
      budget: $budget
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
        email
        tel
        lineid
      }
    }
  }
`;

export const QUERY_SUBCONTRACTHASASSIGN = gql`
  query QUERY_SUBCONTRACTHASASSIGN($id: ID) {
    subcontracthasassign(id: $id) {
      id
      subcontractCreatorId {
        id
      }
    }
  }
`;
// query all of them
export const QUERY_SUBCONTRACTS = gql`
  query {
    subcontracts {
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
        email
      }
    }
  }
`;

export const QUERY_SUBCONTRACTSALL = gql`
  query {
    subcontractsall {
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
        email
      }
    }
  }
`;

export const QUERTY_SUBCONTRACTSWAITING = gql`
  query {
    subcontractswaiting {
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
        email
      }
    }
  }
`;

export const QUERY_SUBCONTRACTSACCEPT = gql`
  query {
    subcontractsapprove {
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
        email
      }
    }
  }
`;

export const QUERY_SUBCONTRACTSDENIED = gql`
  query {
    subcontractsdenied {
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
        email
      }
    }
  }
`;

// subcontractwebdevelopment approve
export const QUERY_SUBCONTRACTSWEBDEVELOPMENT = gql`
  query {
    subcontractswebdevelopment {
      id
      topic
      detail
      startbudget
      duration
      status
      createdAt
      subcontractCreatorId {
        id
        username
        email
      }
    }
  }
`;

export const QUERY_SUBCONTRACTWORDPRESS = gql`
  query {
    subcontractswordpress {
      id
      topic
      detail
      startbudget
      duration
      status
      createdAt
      subcontractCreatorId {
        id
        username
        email
      }
    }
  }
`;

export const QUERY_SUBCONTRACTSMOBILE = gql`
  query {
    subcontractsmobile {
      id
      topic
      detail
      startbudget
      duration
      status
      createdAt
      subcontractCreatorId {
        id
        username
        email
      }
    }
  }
`;

export const QUERY_SUBCONTRACTSUX = gql`
  query {
    subcontractsux{
      id
      topic
      detail
      startbudget
      duration
      status
      createdAt
      subcontractCreatorId {
        id
        username
        email
      }
    }
  }
`;

export const QUERY_SUBCONTRACTSIT = gql`
  query {
    subcontractsit{
      id
      topic
      detail
      startbudget
      duration
      status
      createdAt
      subcontractCreatorId {
        id
        username
        email
      }
    }
  }
`;

export const QUERY_SUBCONTRACTSDESKTOPAPP = gql`
  query {
    subcontractsdesktopapp{
      id
      topic
      detail
      startbudget
      duration
      status
      createdAt
      subcontractCreatorId {
        id
        username
        email
      }
    }
  }
`;

export const QUERY_SUBCONTRACTSCHATBOT = gql`
  query {
    subcontractschatbot{
      id
      topic
      detail
      startbudget
      duration
      status
      createdAt
      subcontractCreatorId {
        id
        username
        email
      }
    }
  }
`;

export const QUERY_SUBCONTRACTSWEBSITE = gql`
  query {
    subcontractsdesktopwebsite{
      id
      topic
      detail
      startbudget
      duration
      status
      createdAt
      subcontractCreatorId {
        id
        username
        email
      }
    }
  }
`;



// hirecontract

// query one by one
export const QUERY_HIRECONTRACT = gql`
  query QUERY_HIRECONTRACT($id: ID!) {
    hirecontract(id: $id) {
      id
      topic
      detail
      typeofwork
      budget
      duration
      province
      status
      createdAt
      hirecontractCreatorId {
        id
        username
        email
        lineid
      }
    }
  }
`;

export const QUERY_HIRECONTRACTHASASSIGN = gql`
  query QUERY_HIRECONTRACTHASASSIGN($id: ID) {
    hirecontracthasassign(id: $id) {
      id
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

// // query all of them
export const QUERY_HIRECONTRACTS = gql`
  query {
    hirecontracts {
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

// query hirecontract only waiting status
export const QUERY_HIRECONTRACTSWAITING = gql`
  query {
    hirecontractswaiting {
      id
      typeofwork
      budget
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

export const QUERY_HIRECONTRACTSAPPROVED = gql`
  query {
    hirecontractsapproved {
      id
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

export const QUERY_HIRECONTRACTSDENIED = gql`
  query {
    hirecontractsdenied {
      id
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

export const QUERY_TASKALL = gql`
  query {
    taskall {
      id
      subcontract {
        topic
        subcontractCreatorId {
          username
        }
      }
      hirecontract {
        topic
        detail
        typeofwork
        duration
        status
        budget
        hirecontractCreatorId {
          username
        }
      }
    }
  }
`;

export const QUERY_TASKACCEPT = gql`
  query {
    taskaccept {
      id
      status
    }
  }
`;

export const QUERY_TASKDENIED = gql`
  query {
    taskdenied {
      id
    }
  }
`;

export const QUERY_TASKSUCCESS = gql`
  query {
    tasksuccess {
      id
    }
  }
`;
