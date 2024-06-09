import { CheckIn } from "@prisma/client";
import { CheckInsRepository } from "./../repositories/check-ins-repository";

interface FetchUserCheckInsHistoryUseCaseUseCaseRequest {
  userId: string;
  page: number;
}

type FetchUserCheckInsHistoryUseCaseUseCaseResponse = {
  checkIns: CheckIn[];
};

export class FetchUserCheckInsHistoryUseCase {
  constructor(private checkInsRepository: CheckInsRepository) {}

  async execute({
    userId,
    page,
  }: FetchUserCheckInsHistoryUseCaseUseCaseRequest): Promise<FetchUserCheckInsHistoryUseCaseUseCaseResponse> {
    const checkIns = await this.checkInsRepository.findManyByUserId(
      userId,
      page,
    );

    return {
      checkIns,
    };
  }
}
