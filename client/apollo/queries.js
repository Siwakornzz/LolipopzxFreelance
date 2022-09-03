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

// subcontractwebdevelopment approve
export const QUERY_SUBCONTRACTSWEBDEVELOPMENT = gql`
  query {
    subcontractswebdevelopment {
      id
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
      Province
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
