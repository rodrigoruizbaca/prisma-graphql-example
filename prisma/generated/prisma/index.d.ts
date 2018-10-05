// Code generated by Prisma (prisma@1.17.1). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { GraphQLSchema } from "graphql";
import { IResolvers } from "graphql-tools/dist/Interfaces";
import { makePrismaClientClass, BaseClientOptions } from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  comment: (where?: CommentWhereInput) => Promise<boolean>;
  post: (where?: PostWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export interface Fragmentable {
  $fragment<T>(fragment: string | Object): T;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;
  $getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;

  /**
   * Queries
   */

  comment: (where: CommentWhereUniqueInput) => Comment;
  comments: (
    args?: {
      where?: CommentWhereInput;
      orderBy?: CommentOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => Promise<Array<CommentNode>>;
  commentsConnection: (
    args?: {
      where?: CommentWhereInput;
      orderBy?: CommentOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => CommentConnection;
  post: (where: PostWhereUniqueInput) => Post;
  posts: (
    args?: {
      where?: PostWhereInput;
      orderBy?: PostOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => Promise<Array<PostNode>>;
  postsConnection: (
    args?: {
      where?: PostWhereInput;
      orderBy?: PostOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => PostConnection;
  user: (where: UserWhereUniqueInput) => User;
  users: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => Promise<Array<UserNode>>;
  usersConnection: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => UserConnection;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createComment: (data: CommentCreateInput) => Comment;
  updateComment: (
    args: { data: CommentUpdateInput; where: CommentWhereUniqueInput }
  ) => Comment;
  updateManyComments: (
    args: { data: CommentUpdateInput; where?: CommentWhereInput }
  ) => BatchPayload;
  upsertComment: (
    args: {
      where: CommentWhereUniqueInput;
      create: CommentCreateInput;
      update: CommentUpdateInput;
    }
  ) => Comment;
  deleteComment: (where: CommentWhereUniqueInput) => Comment;
  deleteManyComments: (where?: CommentWhereInput) => BatchPayload;
  createPost: (data: PostCreateInput) => Post;
  updatePost: (
    args: { data: PostUpdateInput; where: PostWhereUniqueInput }
  ) => Post;
  updateManyPosts: (
    args: { data: PostUpdateInput; where?: PostWhereInput }
  ) => BatchPayload;
  upsertPost: (
    args: {
      where: PostWhereUniqueInput;
      create: PostCreateInput;
      update: PostUpdateInput;
    }
  ) => Post;
  deletePost: (where: PostWhereUniqueInput) => Post;
  deleteManyPosts: (where?: PostWhereInput) => BatchPayload;
  createUser: (data: UserCreateInput) => User;
  updateUser: (
    args: { data: UserUpdateInput; where: UserWhereUniqueInput }
  ) => User;
  updateManyUsers: (
    args: { data: UserUpdateInput; where?: UserWhereInput }
  ) => BatchPayload;
  upsertUser: (
    args: {
      where: UserWhereUniqueInput;
      create: UserCreateInput;
      update: UserUpdateInput;
    }
  ) => User;
  deleteUser: (where: UserWhereUniqueInput) => User;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayload;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  comment: (
    where?: CommentSubscriptionWhereInput
  ) => CommentSubscriptionPayloadSubscription;
  post: (
    where?: PostSubscriptionWhereInput
  ) => PostSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type PostOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "title_ASC"
  | "title_DESC"
  | "body_ASC"
  | "body_DESC"
  | "published_ASC"
  | "published_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type CommentOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "text_ASC"
  | "text_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "email_ASC"
  | "email_DESC"
  | "password_ASC"
  | "password_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface CommentCreateManyWithoutAuthorInput {
  create?: CommentCreateWithoutAuthorInput[] | CommentCreateWithoutAuthorInput;
  connect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput;
}

export type CommentWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface UserCreateWithoutCommentsInput {
  name: String;
  email: String;
  password: String;
  posts?: PostCreateManyWithoutAuthorInput;
}

export interface PostUpdateOneRequiredWithoutCommentsInput {
  create?: PostCreateWithoutCommentsInput;
  update?: PostUpdateWithoutCommentsDataInput;
  upsert?: PostUpsertWithoutCommentsInput;
  connect?: PostWhereUniqueInput;
}

export interface PostCreateManyWithoutAuthorInput {
  create?: PostCreateWithoutAuthorInput[] | PostCreateWithoutAuthorInput;
  connect?: PostWhereUniqueInput[] | PostWhereUniqueInput;
}

export interface UserUpdateOneRequiredWithoutCommentsInput {
  create?: UserCreateWithoutCommentsInput;
  update?: UserUpdateWithoutCommentsDataInput;
  upsert?: UserUpsertWithoutCommentsInput;
  connect?: UserWhereUniqueInput;
}

export interface PostCreateWithoutAuthorInput {
  title: String;
  body: String;
  published: Boolean;
  comments?: CommentCreateManyWithoutPostInput;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UserWhereInput;
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
}

export interface CommentCreateManyWithoutPostInput {
  create?: CommentCreateWithoutPostInput[] | CommentCreateWithoutPostInput;
  connect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput;
}

export interface PostSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: PostWhereInput;
  AND?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput;
  OR?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput;
  NOT?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput;
}

export interface CommentCreateWithoutPostInput {
  text: String;
  author: UserCreateOneWithoutCommentsInput;
}

export interface UserUpdateInput {
  name?: String;
  email?: String;
  password?: String;
  posts?: PostUpdateManyWithoutAuthorInput;
  comments?: CommentUpdateManyWithoutAuthorInput;
}

export interface PostCreateOneWithoutCommentsInput {
  create?: PostCreateWithoutCommentsInput;
  connect?: PostWhereUniqueInput;
}

export interface PostUpdateInput {
  title?: String;
  body?: String;
  published?: Boolean;
  author?: UserUpdateOneRequiredWithoutPostsInput;
  comments?: CommentUpdateManyWithoutPostInput;
}

export interface PostCreateWithoutCommentsInput {
  title: String;
  body: String;
  published: Boolean;
  author: UserCreateOneWithoutPostsInput;
}

export interface PostUpsertWithoutCommentsInput {
  update: PostUpdateWithoutCommentsDataInput;
  create: PostCreateWithoutCommentsInput;
}

export interface UserCreateOneWithoutPostsInput {
  create?: UserCreateWithoutPostsInput;
  connect?: UserWhereUniqueInput;
}

export interface UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput;
  create: UserCreateWithoutPostsInput;
}

export interface UserCreateWithoutPostsInput {
  name: String;
  email: String;
  password: String;
  comments?: CommentCreateManyWithoutAuthorInput;
}

export interface CommentUpdateWithoutAuthorDataInput {
  text?: String;
  post?: PostUpdateOneRequiredWithoutCommentsInput;
}

export interface PostUpdateWithoutCommentsDataInput {
  title?: String;
  body?: String;
  published?: Boolean;
  author?: UserUpdateOneRequiredWithoutPostsInput;
}

export interface CommentUpdateWithWhereUniqueWithoutAuthorInput {
  where: CommentWhereUniqueInput;
  data: CommentUpdateWithoutAuthorDataInput;
}

export interface CommentCreateWithoutAuthorInput {
  text: String;
  post: PostCreateOneWithoutCommentsInput;
}

export interface UserUpdateWithoutPostsDataInput {
  name?: String;
  email?: String;
  password?: String;
  comments?: CommentUpdateManyWithoutAuthorInput;
}

export interface CommentUpdateInput {
  text?: String;
  author?: UserUpdateOneRequiredWithoutCommentsInput;
  post?: PostUpdateOneRequiredWithoutCommentsInput;
}

export interface UserCreateOneWithoutCommentsInput {
  create?: UserCreateWithoutCommentsInput;
  connect?: UserWhereUniqueInput;
}

export interface UserWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  email?: String;
  email_not?: String;
  email_in?: String[] | String;
  email_not_in?: String[] | String;
  email_lt?: String;
  email_lte?: String;
  email_gt?: String;
  email_gte?: String;
  email_contains?: String;
  email_not_contains?: String;
  email_starts_with?: String;
  email_not_starts_with?: String;
  email_ends_with?: String;
  email_not_ends_with?: String;
  password?: String;
  password_not?: String;
  password_in?: String[] | String;
  password_not_in?: String[] | String;
  password_lt?: String;
  password_lte?: String;
  password_gt?: String;
  password_gte?: String;
  password_contains?: String;
  password_not_contains?: String;
  password_starts_with?: String;
  password_not_starts_with?: String;
  password_ends_with?: String;
  password_not_ends_with?: String;
  posts_every?: PostWhereInput;
  posts_some?: PostWhereInput;
  posts_none?: PostWhereInput;
  comments_every?: CommentWhereInput;
  comments_some?: CommentWhereInput;
  comments_none?: CommentWhereInput;
  updatedAt?: DateTimeInput;
  updatedAt_not?: DateTimeInput;
  updatedAt_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_not_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_lt?: DateTimeInput;
  updatedAt_lte?: DateTimeInput;
  updatedAt_gt?: DateTimeInput;
  updatedAt_gte?: DateTimeInput;
  createdAt?: DateTimeInput;
  createdAt_not?: DateTimeInput;
  createdAt_in?: DateTimeInput[] | DateTimeInput;
  createdAt_not_in?: DateTimeInput[] | DateTimeInput;
  createdAt_lt?: DateTimeInput;
  createdAt_lte?: DateTimeInput;
  createdAt_gt?: DateTimeInput;
  createdAt_gte?: DateTimeInput;
  AND?: UserWhereInput[] | UserWhereInput;
  OR?: UserWhereInput[] | UserWhereInput;
  NOT?: UserWhereInput[] | UserWhereInput;
}

export interface PostWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  title?: String;
  title_not?: String;
  title_in?: String[] | String;
  title_not_in?: String[] | String;
  title_lt?: String;
  title_lte?: String;
  title_gt?: String;
  title_gte?: String;
  title_contains?: String;
  title_not_contains?: String;
  title_starts_with?: String;
  title_not_starts_with?: String;
  title_ends_with?: String;
  title_not_ends_with?: String;
  body?: String;
  body_not?: String;
  body_in?: String[] | String;
  body_not_in?: String[] | String;
  body_lt?: String;
  body_lte?: String;
  body_gt?: String;
  body_gte?: String;
  body_contains?: String;
  body_not_contains?: String;
  body_starts_with?: String;
  body_not_starts_with?: String;
  body_ends_with?: String;
  body_not_ends_with?: String;
  published?: Boolean;
  published_not?: Boolean;
  author?: UserWhereInput;
  comments_every?: CommentWhereInput;
  comments_some?: CommentWhereInput;
  comments_none?: CommentWhereInput;
  AND?: PostWhereInput[] | PostWhereInput;
  OR?: PostWhereInput[] | PostWhereInput;
  NOT?: PostWhereInput[] | PostWhereInput;
}

export interface UserUpdateWithoutCommentsDataInput {
  name?: String;
  email?: String;
  password?: String;
  posts?: PostUpdateManyWithoutAuthorInput;
}

export interface UserCreateInput {
  name: String;
  email: String;
  password: String;
  posts?: PostCreateManyWithoutAuthorInput;
  comments?: CommentCreateManyWithoutAuthorInput;
}

export interface PostUpdateManyWithoutAuthorInput {
  create?: PostCreateWithoutAuthorInput[] | PostCreateWithoutAuthorInput;
  delete?: PostWhereUniqueInput[] | PostWhereUniqueInput;
  connect?: PostWhereUniqueInput[] | PostWhereUniqueInput;
  disconnect?: PostWhereUniqueInput[] | PostWhereUniqueInput;
  update?:
    | PostUpdateWithWhereUniqueWithoutAuthorInput[]
    | PostUpdateWithWhereUniqueWithoutAuthorInput;
  upsert?:
    | PostUpsertWithWhereUniqueWithoutAuthorInput[]
    | PostUpsertWithWhereUniqueWithoutAuthorInput;
}

export type PostWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface PostUpdateWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput;
  data: PostUpdateWithoutAuthorDataInput;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  email?: String;
}>;

export interface PostUpdateWithoutAuthorDataInput {
  title?: String;
  body?: String;
  published?: Boolean;
  comments?: CommentUpdateManyWithoutPostInput;
}

export interface UserUpdateOneRequiredWithoutPostsInput {
  create?: UserCreateWithoutPostsInput;
  update?: UserUpdateWithoutPostsDataInput;
  upsert?: UserUpsertWithoutPostsInput;
  connect?: UserWhereUniqueInput;
}

export interface CommentUpdateManyWithoutPostInput {
  create?: CommentCreateWithoutPostInput[] | CommentCreateWithoutPostInput;
  delete?: CommentWhereUniqueInput[] | CommentWhereUniqueInput;
  connect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput;
  disconnect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput;
  update?:
    | CommentUpdateWithWhereUniqueWithoutPostInput[]
    | CommentUpdateWithWhereUniqueWithoutPostInput;
  upsert?:
    | CommentUpsertWithWhereUniqueWithoutPostInput[]
    | CommentUpsertWithWhereUniqueWithoutPostInput;
}

export interface CommentWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  text?: String;
  text_not?: String;
  text_in?: String[] | String;
  text_not_in?: String[] | String;
  text_lt?: String;
  text_lte?: String;
  text_gt?: String;
  text_gte?: String;
  text_contains?: String;
  text_not_contains?: String;
  text_starts_with?: String;
  text_not_starts_with?: String;
  text_ends_with?: String;
  text_not_ends_with?: String;
  author?: UserWhereInput;
  post?: PostWhereInput;
  AND?: CommentWhereInput[] | CommentWhereInput;
  OR?: CommentWhereInput[] | CommentWhereInput;
  NOT?: CommentWhereInput[] | CommentWhereInput;
}

export interface CommentUpdateWithWhereUniqueWithoutPostInput {
  where: CommentWhereUniqueInput;
  data: CommentUpdateWithoutPostDataInput;
}

export interface PostCreateInput {
  title: String;
  body: String;
  published: Boolean;
  author: UserCreateOneWithoutPostsInput;
  comments?: CommentCreateManyWithoutPostInput;
}

export interface UserUpsertWithoutCommentsInput {
  update: UserUpdateWithoutCommentsDataInput;
  create: UserCreateWithoutCommentsInput;
}

export interface PostUpsertWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput;
  update: PostUpdateWithoutAuthorDataInput;
  create: PostCreateWithoutAuthorInput;
}

export interface CommentUpsertWithWhereUniqueWithoutPostInput {
  where: CommentWhereUniqueInput;
  update: CommentUpdateWithoutPostDataInput;
  create: CommentCreateWithoutPostInput;
}

export interface CommentUpdateWithoutPostDataInput {
  text?: String;
  author?: UserUpdateOneRequiredWithoutCommentsInput;
}

export interface CommentUpsertWithWhereUniqueWithoutAuthorInput {
  where: CommentWhereUniqueInput;
  update: CommentUpdateWithoutAuthorDataInput;
  create: CommentCreateWithoutAuthorInput;
}

export interface CommentSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: CommentWhereInput;
  AND?: CommentSubscriptionWhereInput[] | CommentSubscriptionWhereInput;
  OR?: CommentSubscriptionWhereInput[] | CommentSubscriptionWhereInput;
  NOT?: CommentSubscriptionWhereInput[] | CommentSubscriptionWhereInput;
}

export interface CommentCreateInput {
  text: String;
  author: UserCreateOneWithoutCommentsInput;
  post: PostCreateOneWithoutCommentsInput;
}

export interface CommentUpdateManyWithoutAuthorInput {
  create?: CommentCreateWithoutAuthorInput[] | CommentCreateWithoutAuthorInput;
  delete?: CommentWhereUniqueInput[] | CommentWhereUniqueInput;
  connect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput;
  disconnect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput;
  update?:
    | CommentUpdateWithWhereUniqueWithoutAuthorInput[]
    | CommentUpdateWithWhereUniqueWithoutAuthorInput;
  upsert?:
    | CommentUpsertWithWhereUniqueWithoutAuthorInput[]
    | CommentUpsertWithWhereUniqueWithoutAuthorInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface UserPreviousValuesNode {
  id: ID_Output;
  name: String;
  email: String;
  password: String;
  updatedAt: DateTimeOutput;
  createdAt: DateTimeOutput;
}

export interface UserPreviousValues
  extends Promise<UserPreviousValuesNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  updatedAt: () => Promise<DateTimeOutput>;
  createdAt: () => Promise<DateTimeOutput>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValuesNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface PostPreviousValuesNode {
  id: ID_Output;
  title: String;
  body: String;
  published: Boolean;
}

export interface PostPreviousValues
  extends Promise<PostPreviousValuesNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  body: () => Promise<String>;
  published: () => Promise<Boolean>;
}

export interface PostPreviousValuesSubscription
  extends Promise<AsyncIterator<PostPreviousValuesNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  body: () => Promise<AsyncIterator<String>>;
  published: () => Promise<AsyncIterator<Boolean>>;
}

export interface PostSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface PostSubscriptionPayload
  extends Promise<PostSubscriptionPayloadNode>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = Post>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = PostPreviousValues>() => T;
}

export interface PostSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<PostSubscriptionPayloadNode>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = PostSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = PostPreviousValuesSubscription>() => T;
}

export interface CommentEdgeNode {
  cursor: String;
}

export interface CommentEdge extends Promise<CommentEdgeNode>, Fragmentable {
  node: <T = Comment>() => T;
  cursor: () => Promise<String>;
}

export interface CommentEdgeSubscription
  extends Promise<AsyncIterator<CommentEdgeNode>>,
    Fragmentable {
  node: <T = CommentSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface PageInfoNode {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfo extends Promise<PageInfoNode>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfoNode>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUserNode {
  count: Int;
}

export interface AggregateUser
  extends Promise<AggregateUserNode>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUserNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserConnectionNode {}

export interface UserConnection
  extends Promise<UserConnectionNode>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = Promise<Array<UserEdgeNode>>>() => T;
  aggregate: <T = AggregateUser>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnectionNode>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<Array<UserEdgeSubscription>>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface CommentConnectionNode {}

export interface CommentConnection
  extends Promise<CommentConnectionNode>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = Promise<Array<CommentEdgeNode>>>() => T;
  aggregate: <T = AggregateComment>() => T;
}

export interface CommentConnectionSubscription
  extends Promise<AsyncIterator<CommentConnectionNode>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<Array<CommentEdgeSubscription>>>>() => T;
  aggregate: <T = AggregateCommentSubscription>() => T;
}

export interface AggregatePostNode {
  count: Int;
}

export interface AggregatePost
  extends Promise<AggregatePostNode>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregatePostSubscription
  extends Promise<AsyncIterator<AggregatePostNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserNode {
  id: ID_Output;
  name: String;
  email: String;
  password: String;
  updatedAt: DateTimeOutput;
  createdAt: DateTimeOutput;
}

export interface User extends Promise<UserNode>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  posts: <T = Promise<Array<PostNode>>>(
    args?: {
      where?: PostWhereInput;
      orderBy?: PostOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
  comments: <T = Promise<Array<CommentNode>>>(
    args?: {
      where?: CommentWhereInput;
      orderBy?: CommentOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
  updatedAt: () => Promise<DateTimeOutput>;
  createdAt: () => Promise<DateTimeOutput>;
}

export interface UserSubscription
  extends Promise<AsyncIterator<UserNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  posts: <T = Promise<AsyncIterator<Array<PostSubscription>>>>(
    args?: {
      where?: PostWhereInput;
      orderBy?: PostOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
  comments: <T = Promise<AsyncIterator<Array<CommentSubscription>>>>(
    args?: {
      where?: CommentWhereInput;
      orderBy?: CommentOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface PostConnectionNode {}

export interface PostConnection
  extends Promise<PostConnectionNode>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = Promise<Array<PostEdgeNode>>>() => T;
  aggregate: <T = AggregatePost>() => T;
}

export interface PostConnectionSubscription
  extends Promise<AsyncIterator<PostConnectionNode>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<Array<PostEdgeSubscription>>>>() => T;
  aggregate: <T = AggregatePostSubscription>() => T;
}

export interface BatchPayloadNode {
  count: Long;
}

export interface BatchPayload extends Promise<BatchPayloadNode>, Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayloadNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface CommentPreviousValuesNode {
  id: ID_Output;
  text: String;
}

export interface CommentPreviousValues
  extends Promise<CommentPreviousValuesNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  text: () => Promise<String>;
}

export interface CommentPreviousValuesSubscription
  extends Promise<AsyncIterator<CommentPreviousValuesNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  text: () => Promise<AsyncIterator<String>>;
}

export interface CommentSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface CommentSubscriptionPayload
  extends Promise<CommentSubscriptionPayloadNode>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = Comment>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = CommentPreviousValues>() => T;
}

export interface CommentSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<CommentSubscriptionPayloadNode>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = CommentSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = CommentPreviousValuesSubscription>() => T;
}

export interface CommentNode {
  id: ID_Output;
  text: String;
}

export interface Comment extends Promise<CommentNode>, Fragmentable {
  id: () => Promise<ID_Output>;
  text: () => Promise<String>;
  author: <T = User>() => T;
  post: <T = Post>() => T;
}

export interface CommentSubscription
  extends Promise<AsyncIterator<CommentNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  text: () => Promise<AsyncIterator<String>>;
  author: <T = UserSubscription>() => T;
  post: <T = PostSubscription>() => T;
}

export interface PostNode {
  id: ID_Output;
  title: String;
  body: String;
  published: Boolean;
}

export interface Post extends Promise<PostNode>, Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  body: () => Promise<String>;
  published: () => Promise<Boolean>;
  author: <T = User>() => T;
  comments: <T = Promise<Array<CommentNode>>>(
    args?: {
      where?: CommentWhereInput;
      orderBy?: CommentOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface PostSubscription
  extends Promise<AsyncIterator<PostNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  body: () => Promise<AsyncIterator<String>>;
  published: () => Promise<AsyncIterator<Boolean>>;
  author: <T = UserSubscription>() => T;
  comments: <T = Promise<AsyncIterator<Array<CommentSubscription>>>>(
    args?: {
      where?: CommentWhereInput;
      orderBy?: CommentOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface UserEdgeNode {
  cursor: String;
}

export interface UserEdge extends Promise<UserEdgeNode>, Fragmentable {
  node: <T = User>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdgeNode>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateCommentNode {
  count: Int;
}

export interface AggregateComment
  extends Promise<AggregateCommentNode>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateCommentSubscription
  extends Promise<AsyncIterator<AggregateCommentNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface PostEdgeNode {
  cursor: String;
}

export interface PostEdge extends Promise<PostEdgeNode>, Fragmentable {
  node: <T = Post>() => T;
  cursor: () => Promise<String>;
}

export interface PostEdgeSubscription
  extends Promise<AsyncIterator<PostEdgeNode>>,
    Fragmentable {
  node: <T = PostSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface UserSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface UserSubscriptionPayload
  extends Promise<UserSubscriptionPayloadNode>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = User>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValues>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayloadNode>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

export type Long = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/**
 * Type Defs
 */

export const prisma: Prisma;
