import { Prisma, CheckIn } from "@prisma/client";

export interface CheckInsRepository {
  create(data: Prisma.CheckInUncheckedCreateInput): Promise<CheckIn>;
  findByUserIdOnDate(userId: string, Date: Date): Promise<CheckIn | null>;
}
