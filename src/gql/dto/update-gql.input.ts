import { CreateGqlInput } from './create-gql.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateGqlInput extends PartialType(CreateGqlInput) {
  @Field(() => Int)
  id: number;
}
