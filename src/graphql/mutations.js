/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
      description
      id
      image
      name
      source_code_link
      tags {
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
      description
      id
      image
      name
      source_code_link
      tags {
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
      description
      id
      image
      name
      source_code_link
      tags {
        nextToken
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
export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
      color
      id
      name
      project {
        description
        id
        image
        name
        source_code_link
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
      color
      id
      name
      project {
        description
        id
        image
        name
        source_code_link
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
      color
      id
      name
      project {
        description
        id
        image
        name
        source_code_link
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
