import { Model, Document, FilterQuery, UpdateQuery, QueryOptions } from 'mongoose';
export interface PopulateOptions {
    path: string
    select?: string
}
export class BaseRepository<T extends Document> {
    private model: Model<T>;

    constructor(model: Model<T>) {
        this.model = model;
    }

    async create(data: Partial<T>): Promise<T> {
        console.log(this.model)
        const document = new this.model(data);
        return document.save();
    }

    async findById(id: string): Promise<T | null> {
        return this.model.findById(id).exec();
    }

    async findOne(filter: FilterQuery<T>): Promise<T | null> {
        return this.model.findOne(filter).exec();
    }

    async findAll(filter: FilterQuery<T> = {}, page: number = 1, limit: number = 10, populate?: PopulateOptions[], select?: string
    ): Promise<T[]> {
        const skip = (page - 1) * limit;
        return this.model.find(filter).skip(skip).limit(limit).populate(populate ?? []).select(select ?? "").exec();
    }

    async updateById(id: string, update: UpdateQuery<T>, options: QueryOptions = { new: true }): Promise<T | null> {
        return this.model.findByIdAndUpdate(id, update, options).exec();
    }

    async deleteById(id: string): Promise<T | null> {
        return this.model.findByIdAndDelete(id).exec();
    }

    async count(filter: FilterQuery<T> = {}): Promise<number> {
        return this.model.countDocuments(filter).exec();
    }
}
