/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
      id
      name
      description
      image
      source_code_link
      projectId
      tags {
        items {
          id
          projectId
          color
          name
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
      id
      name
      description
      image
      source_code_link
      projectId
      tags {
        items {
          id
          projectId
          color
          name
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
      id
      name
      description
      image
      source_code_link
      projectId
      tags {
        items {
          id
          projectId
          color
          name
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
      id
      name
      color
      projectId
      project {
        id
        name
        description
        image
        source_code_link
        projectId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateTag = /* GraphQL */ `
  mutation UpdateTag(
    $input: UpdateTagInput!
    $condition: ModelTagConditionInput
  ) {
    updateTag(input: $input, condition: $condition) {
      id
      name
      color
      projectId
      project {
        id
        name
        description
        image
        source_code_link
        projectId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteTag = /* GraphQL */ `
  mutation DeleteTag(
    $input: DeleteTagInput!
    $condition: ModelTagConditionInput
  ) {
    deleteTag(input: $input, condition: $condition) {
      id
      name
      color
      projectId
      project {
        id
        name
        description
        image
        source_code_link
        projectId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createService = /* GraphQL */ `
  mutation CreateService(
    $input: CreateServiceInput!
    $condition: ModelServiceConditionInput
  ) {
    createService(input: $input, condition: $condition) {
      id
      title
      icon
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateService = /* GraphQL */ `
  mutation UpdateService(
    $input: UpdateServiceInput!
    $condition: ModelServiceConditionInput
  ) {
    updateService(input: $input, condition: $condition) {
      id
      title
      icon
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteService = /* GraphQL */ `
  mutation DeleteService(
    $input: DeleteServiceInput!
    $condition: ModelServiceConditionInput
  ) {
    deleteService(input: $input, condition: $condition) {
      id
      title
      icon
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createTechnology = /* GraphQL */ `
  mutation CreateTechnology(
    $input: CreateTechnologyInput!
    $condition: ModelTechnologyConditionInput
  ) {
    createTechnology(input: $input, condition: $condition) {
      icon
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateTechnology = /* GraphQL */ `
  mutation UpdateTechnology(
    $input: UpdateTechnologyInput!
    $condition: ModelTechnologyConditionInput
  ) {
    updateTechnology(input: $input, condition: $condition) {
      icon
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteTechnology = /* GraphQL */ `
  mutation DeleteTechnology(
    $input: DeleteTechnologyInput!
    $condition: ModelTechnologyConditionInput
  ) {
    deleteTechnology(input: $input, condition: $condition) {
      icon
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createContactSubmission = /* GraphQL */ `
  mutation CreateContactSubmission(
    $input: CreateContactSubmissionInput!
    $condition: ModelContactSubmissionConditionInput
  ) {
    createContactSubmission(input: $input, condition: $condition) {
      id
      name
      email
      message
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateContactSubmission = /* GraphQL */ `
  mutation UpdateContactSubmission(
    $input: UpdateContactSubmissionInput!
    $condition: ModelContactSubmissionConditionInput
  ) {
    updateContactSubmission(input: $input, condition: $condition) {
      id
      name
      email
      message
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteContactSubmission = /* GraphQL */ `
  mutation DeleteContactSubmission(
    $input: DeleteContactSubmissionInput!
    $condition: ModelContactSubmissionConditionInput
  ) {
    deleteContactSubmission(input: $input, condition: $condition) {
      id
      name
      email
      message
      createdAt
      updatedAt
      __typename
    }
  }
`;
