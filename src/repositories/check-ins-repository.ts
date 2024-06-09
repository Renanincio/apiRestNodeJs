import { Prisma, CheckIn } from "@prisma/client";

export interface CheckInsRepository {
  create(data: Prisma.CheckInUncheckedCreateInput): Promise<CheckIn>;
  countByUserId(userId: string): Promise<number>;
  findByUserIdOnDate(userId: string, Date: Date): Promise<CheckIn | null>;
  findManyByUserId(userId: string, page: number): Promise<CheckIn[]>;
  findById(id: string): Promise<CheckIn | null>;
  save(checkIn: CheckIn): Promise<CheckIn>;
}
