import { HttpService } from '@nestjs/axios';
import { lastValueFrom, map } from 'rxjs';
import { http } from '../interfaces/http.interface';

export class HttpAdapter implements http {
  constructor(private readonly httpService: HttpService) {}

  get = <T>(url: string, headers: Record<string, string>): Promise<T> => {
    return lastValueFrom(
      this.httpService
        .get<T>(url, { headers })
        .pipe(map((response) => response.data)),
    );
  };
}
