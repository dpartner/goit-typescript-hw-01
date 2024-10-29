type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>) {
  // Оновлення користувача
  const defaultUser: User = {
    name: "",
    surname: "",
    email: "",
    password: "",
  };

  // З'єднуємо дані користувача та значення за замовчуванням
  return { ...defaultUser, ...initialValues };
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
