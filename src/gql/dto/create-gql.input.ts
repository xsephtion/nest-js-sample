import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateGqlInput {
  @Field(() => String, { description: 'Example field (placeholder)' })
  exampleField: string;
}
