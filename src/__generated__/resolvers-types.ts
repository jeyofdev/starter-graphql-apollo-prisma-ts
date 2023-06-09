import { GraphQLResolveInfo } from 'graphql';
import { IContext } from '../context';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
};

export type AddMovieMutationResponse = {
	__typename?: 'AddMovieMutationResponse';
	code: Scalars['String'];
	message: Scalars['String'];
	movie?: Maybe<Movie>;
	success: Scalars['Boolean'];
};

export type Movie = {
	__typename?: 'Movie';
	duration: Scalars['Int'];
	id?: Maybe<Scalars['ID']>;
	title: Scalars['String'];
};

export type Mutation = {
	__typename?: 'Mutation';
	addMovie?: Maybe<AddMovieMutationResponse>;
};

export type MutationAddMovieArgs = {
	duration?: InputMaybe<Scalars['Int']>;
	title?: InputMaybe<Scalars['String']>;
};

export type Query = {
	__typename?: 'Query';
	movies?: Maybe<Array<Maybe<Movie>>>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
	resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
	| ResolverFn<TResult, TParent, TContext, TArgs>
	| ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
	TResult,
	TKey extends string,
	TParent,
	TContext,
	TArgs,
> {
	subscribe: SubscriptionSubscribeFn<
		{ [key in TKey]: TResult },
		TParent,
		TContext,
		TArgs
	>;
	resolve?: SubscriptionResolveFn<
		TResult,
		{ [key in TKey]: TResult },
		TContext,
		TArgs
	>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
	subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
	resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
	TResult,
	TKey extends string,
	TParent,
	TContext,
	TArgs,
> =
	| SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
	| SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
	TResult,
	TKey extends string,
	TParent = {},
	TContext = {},
	TArgs = {},
> =
	| ((
			...args: any[]
	  ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
	| SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
	parent: TParent,
	context: TContext,
	info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
	obj: T,
	context: TContext,
	info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
	TResult = {},
	TParent = {},
	TContext = {},
	TArgs = {},
> = (
	next: NextResolverFn<TResult>,
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
	AddMovieMutationResponse: ResolverTypeWrapper<AddMovieMutationResponse>;
	Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
	ID: ResolverTypeWrapper<Scalars['ID']>;
	Int: ResolverTypeWrapper<Scalars['Int']>;
	Movie: ResolverTypeWrapper<Movie>;
	Mutation: ResolverTypeWrapper<{}>;
	Query: ResolverTypeWrapper<{}>;
	String: ResolverTypeWrapper<Scalars['String']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
	AddMovieMutationResponse: AddMovieMutationResponse;
	Boolean: Scalars['Boolean'];
	ID: Scalars['ID'];
	Int: Scalars['Int'];
	Movie: Movie;
	Mutation: {};
	Query: {};
	String: Scalars['String'];
}>;

export type AddMovieMutationResponseResolvers<
	ContextType = IContext,
	ParentType extends ResolversParentTypes['AddMovieMutationResponse'] = ResolversParentTypes['AddMovieMutationResponse'],
> = ResolversObject<{
	code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	movie?: Resolver<Maybe<ResolversTypes['Movie']>, ParentType, ContextType>;
	success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieResolvers<
	ContextType = IContext,
	ParentType extends ResolversParentTypes['Movie'] = ResolversParentTypes['Movie'],
> = ResolversObject<{
	duration?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
	id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
	title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<
	ContextType = IContext,
	ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation'],
> = ResolversObject<{
	addMovie?: Resolver<
		Maybe<ResolversTypes['AddMovieMutationResponse']>,
		ParentType,
		ContextType,
		Partial<MutationAddMovieArgs>
	>;
}>;

export type QueryResolvers<
	ContextType = IContext,
	ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = ResolversObject<{
	movies?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['Movie']>>>,
		ParentType,
		ContextType
	>;
}>;

export type Resolvers<ContextType = IContext> = ResolversObject<{
	AddMovieMutationResponse?: AddMovieMutationResponseResolvers<ContextType>;
	Movie?: MovieResolvers<ContextType>;
	Mutation?: MutationResolvers<ContextType>;
	Query?: QueryResolvers<ContextType>;
}>;
