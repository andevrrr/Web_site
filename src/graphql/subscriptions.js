/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject($filter: ModelSubscriptionProjectFilterInput) {
    onCreateProject(filter: $filter) {
      id
      projectId
      name
      description
      image
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
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject($filter: ModelSubscriptionProjectFilterInput) {
    onUpdateProject(filter: $filter) {
      id
      projectId
      name
      description
      image
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
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject($filter: ModelSubscriptionProjectFilterInput) {
    onDeleteProject(filter: $filter) {
      id
      projectId
      name
      description
      image
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
export const onCreateService = /* GraphQL */ `
  subscription OnCreateService($filter: ModelSubscriptionServiceFilterInput) {
    onCreateService(filter: $filter) {
      id
      title
      icon
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateService = /* GraphQL */ `
  subscription OnUpdateService($filter: ModelSubscriptionServiceFilterInput) {
    onUpdateService(filter: $filter) {
      id
      title
      icon
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteService = /* GraphQL */ `
  subscription OnDeleteService($filter: ModelSubscriptionServiceFilterInput) {
    onDeleteService(filter: $filter) {
      id
      title
      icon
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag($filter: ModelSubscriptionTagFilterInput) {
    onCreateTag(filter: $filter) {
      id
      name
      color
      projectId
      project {
        id
        projectId
        name
        description
        image
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
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag($filter: ModelSubscriptionTagFilterInput) {
    onUpdateTag(filter: $filter) {
      id
      name
      color
      projectId
      project {
        id
        projectId
        name
        description
        image
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
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag($filter: ModelSubscriptionTagFilterInput) {
    onDeleteTag(filter: $filter) {
      id
      name
      color
      projectId
      project {
        id
        projectId
        name
        description
        image
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
export const onCreateTechnology = /* GraphQL */ `
  subscription OnCreateTechnology(
    $filter: ModelSubscriptionTechnologyFilterInput
  ) {
    onCreateTechnology(filter: $filter) {
      icon
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateTechnology = /* GraphQL */ `
  subscription OnUpdateTechnology(
    $filter: ModelSubscriptionTechnologyFilterInput
  ) {
    onUpdateTechnology(filter: $filter) {
      icon
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteTechnology = /* GraphQL */ `
  subscription OnDeleteTechnology(
    $filter: ModelSubscriptionTechnologyFilterInput
  ) {
    onDeleteTechnology(filter: $filter) {
      icon
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
