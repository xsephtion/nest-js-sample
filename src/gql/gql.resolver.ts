import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GqlService } from './gql.service';
import { Gql } from './entities/gql.entity';
import { CreateGqlInput } from './dto/create-gql.input';
import { UpdateGqlInput } from './dto/update-gql.input';

@Resolver(() => Gql)
export class GqlResolver {
  constructor(private readonly gqlService: GqlService) {}

  @Mutation(() => Gql)
  createGql(@Args('createGqlInput') createGqlInput: CreateGqlInput) {
    return this.gqlService.create(createGqlInput);
  }

  @Query(() => [Gql], { name: 'gql' })
  findAll() {
    return this.gqlService.findAll();
  }

  @Query(() => Gql, { name: 'gql' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.gqlService.findOne(id);
  }

  @Mutation(() => Gql)
  updateGql(@Args('updateGqlInput') updateGqlInput: UpdateGqlInput) {
    return this.gqlService.update(updateGqlInput.id, updateGqlInput);
  }

  @Mutation(() => Gql)
  removeGql(@Args('id', { type: () => Int }) id: number) {
    return this.gqlService.remove(id);
  }
}
