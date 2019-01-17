/**
 * This file is automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 * 
 * For better typings, you should provide configuration for how to lookup 
 * the types. See the documentation for "typegenAutoConfig"
 */
import * as ctx from "../context"
import * as prisma from "./prisma-client/index"

declare global {
  interface GraphQLNexusGen extends GraphQLNexusGenTypes {}
}

// Maybe Promise
export type MaybePromise<T> = T | PromiseLike<T>;

// Maybe Promise List
export type MaybePromiseList<T> = Array<MaybePromise<T>>;

// Maybe Thunk
export type MaybeThunk<T> = T | (() => T);

// Maybe Thunk, with args
export type MaybeThunkArgs<T, A> = T | ((args?: A) => T);

export type QueryHelloReturnType = string;

export interface QueryHelloArgs {
  name: string;
}

export type QueryPostsReturnType = MaybePromiseList<Post_ReturnType>;

export type QueryUsersReturnType = MaybePromiseList<User_ReturnType>;

export type QueryRootType = {};

export type Query_ReturnType = {};

export type PostCommentsReturnType = MaybePromiseList<Comment_ReturnType>;

export interface PostCommentsArgs {
  after?: null | string;
  before?: null | string;
  first?: null | number;
  last?: null | number;
  orderBy?: null | CommentOrderByInput;
  skip?: null | number;
  where?: null | CommentWhereInput;
}

export type PostContentReturnType = string;

export type PostIdReturnType = string;

export type PostTitleReturnType = string;

export type PostRootType = prisma.Post;

export type Post_ReturnType = prisma.Post

export type CommentOrderByInput = "content_ASC" | "content_DESC" | "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "updatedAt_ASC" | "updatedAt_DESC";

export interface CommentWhereInput {
  AND: CommentWhereInput[];
  author?: null | UserWhereInput;
  content?: null | string;
  content_contains?: null | string;
  content_ends_with?: null | string;
  content_gt?: null | string;
  content_gte?: null | string;
  content_in: string[];
  content_lt?: null | string;
  content_lte?: null | string;
  content_not?: null | string;
  content_not_contains?: null | string;
  content_not_ends_with?: null | string;
  content_not_in: string[];
  content_not_starts_with?: null | string;
  content_starts_with?: null | string;
  id?: null | string;
  id_contains?: null | string;
  id_ends_with?: null | string;
  id_gt?: null | string;
  id_gte?: null | string;
  id_in: string[];
  id_lt?: null | string;
  id_lte?: null | string;
  id_not?: null | string;
  id_not_contains?: null | string;
  id_not_ends_with?: null | string;
  id_not_in: string[];
  id_not_starts_with?: null | string;
  id_starts_with?: null | string;
  NOT: CommentWhereInput[];
  OR: CommentWhereInput[];
}

export interface UserWhereInput {
  AND: UserWhereInput[];
  id?: null | string;
  id_contains?: null | string;
  id_ends_with?: null | string;
  id_gt?: null | string;
  id_gte?: null | string;
  id_in: string[];
  id_lt?: null | string;
  id_lte?: null | string;
  id_not?: null | string;
  id_not_contains?: null | string;
  id_not_ends_with?: null | string;
  id_not_in: string[];
  id_not_starts_with?: null | string;
  id_starts_with?: null | string;
  name?: null | string;
  name_contains?: null | string;
  name_ends_with?: null | string;
  name_gt?: null | string;
  name_gte?: null | string;
  name_in: string[];
  name_lt?: null | string;
  name_lte?: null | string;
  name_not?: null | string;
  name_not_contains?: null | string;
  name_not_ends_with?: null | string;
  name_not_in: string[];
  name_not_starts_with?: null | string;
  name_starts_with?: null | string;
  NOT: UserWhereInput[];
  OR: UserWhereInput[];
  posts_every?: null | PostWhereInput;
  posts_none?: null | PostWhereInput;
  posts_some?: null | PostWhereInput;
}

export interface PostWhereInput {
  AND: PostWhereInput[];
  comments_every?: null | CommentWhereInput;
  comments_none?: null | CommentWhereInput;
  comments_some?: null | CommentWhereInput;
  content?: null | string;
  content_contains?: null | string;
  content_ends_with?: null | string;
  content_gt?: null | string;
  content_gte?: null | string;
  content_in: string[];
  content_lt?: null | string;
  content_lte?: null | string;
  content_not?: null | string;
  content_not_contains?: null | string;
  content_not_ends_with?: null | string;
  content_not_in: string[];
  content_not_starts_with?: null | string;
  content_starts_with?: null | string;
  id?: null | string;
  id_contains?: null | string;
  id_ends_with?: null | string;
  id_gt?: null | string;
  id_gte?: null | string;
  id_in: string[];
  id_lt?: null | string;
  id_lte?: null | string;
  id_not?: null | string;
  id_not_contains?: null | string;
  id_not_ends_with?: null | string;
  id_not_in: string[];
  id_not_starts_with?: null | string;
  id_starts_with?: null | string;
  NOT: PostWhereInput[];
  OR: PostWhereInput[];
  title?: null | string;
  title_contains?: null | string;
  title_ends_with?: null | string;
  title_gt?: null | string;
  title_gte?: null | string;
  title_in: string[];
  title_lt?: null | string;
  title_lte?: null | string;
  title_not?: null | string;
  title_not_contains?: null | string;
  title_not_ends_with?: null | string;
  title_not_in: string[];
  title_not_starts_with?: null | string;
  title_starts_with?: null | string;
}

export type CommentAuthorReturnType = User_ReturnType;

export type CommentContentReturnType = string;

export type CommentIdReturnType = string;

export type CommentRootType = prisma.Comment;

export type Comment_ReturnType = prisma.Comment

export type UserIdReturnType = string;

export type UserNameReturnType = string;

export type UserRootType = prisma.User;

export type User_ReturnType = prisma.User

export interface GraphQLNexusGenArgTypes {
  Query: {
    hello: QueryHelloArgs;
  };
  Post: {
    comments: PostCommentsArgs;
  };
}

export interface GraphQLNexusGenRootTypes {
  Query: QueryRootType;
  Post: PostRootType;
  Comment: CommentRootType;
  User: UserRootType;
}

export interface GraphQLNexusGenReturnTypes {
  Query: {
    hello: QueryHelloReturnType;
    posts: QueryPostsReturnType;
    users: QueryUsersReturnType;
  };
  Post: {
    comments: PostCommentsReturnType;
    content: PostContentReturnType;
    id: PostIdReturnType;
    title: PostTitleReturnType;
  };
  Comment: {
    author: CommentAuthorReturnType;
    content: CommentContentReturnType;
    id: CommentIdReturnType;
  };
  User: {
    id: UserIdReturnType;
    name: UserNameReturnType;
  };
}

export interface GraphQLNexusGenTypes {
  argTypes: GraphQLNexusGenArgTypes;
  backingTypes: GraphQLNexusGenRootTypes;
  returnTypes: GraphQLNexusGenReturnTypes;
  context: ctx.Context;
  enums: {
    CommentOrderByInput: CommentOrderByInput;
  };
  objects: {
    Query: QueryRootType;
    Post: PostRootType;
    Comment: CommentRootType;
    User: UserRootType;
  };
  interfaces: {};
  unions: {};
  scalars: {
    String: any;
    Int: any;
    ID: any;
    Boolean: any;
  };
  inputObjects: {
    CommentWhereInput: CommentWhereInput;
    UserWhereInput: UserWhereInput;
    PostWhereInput: PostWhereInput;
  };
  allInputTypes: 
    | Extract<keyof GraphQLNexusGenTypes['inputObjects'], string>
    | Extract<keyof GraphQLNexusGenTypes['enums'], string>
    | Extract<keyof GraphQLNexusGenTypes['scalars'], string>;
  allOutputTypes: 
    | Extract<keyof GraphQLNexusGenTypes['objects'], string>
    | Extract<keyof GraphQLNexusGenTypes['enums'], string>
    | Extract<keyof GraphQLNexusGenTypes['unions'], string>
    | Extract<keyof GraphQLNexusGenTypes['interfaces'], string>
    | Extract<keyof GraphQLNexusGenTypes['scalars'], string>;
}

export type Gen = GraphQLNexusGenTypes;
