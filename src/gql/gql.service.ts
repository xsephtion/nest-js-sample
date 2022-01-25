import { Injectable } from '@nestjs/common';
import { CreateGqlInput } from './dto/create-gql.input';
import { UpdateGqlInput } from './dto/update-gql.input';

@Injectable()
export class GqlService {
  create(createGqlInput: CreateGqlInput) {
    return createGqlInput;
  }

  findAll() {
    return `This action returns all gql`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gql`;
  }

  update(id: number, updateGqlInput: UpdateGqlInput) {
    return `This action updates a #${id} gql`;
  }

  remove(id: number) {
    return `This action removes a #${id} gql`;
  }
}
