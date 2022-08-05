type User = { email: string };
type Sale = { price: number; };

interface Get<T> {
  get(id: number): Promise<T>
}

const userService: Get<User> = {
  async get(id: number): Promise<User> {
    return { email: '' };
  }
}

const saleService: Get<Sale> = {
  async get(id: number): Promise<Sale> {
    return { price: 0 };
  }
}

