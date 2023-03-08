export interface http {
  get<T>(url: string, headers?: Record<string, string>): Promise<T>;
}
