import Input from "../components/Input";
import Button from "../components/Button";
import { useEffect } from "react";

interface IFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const Signup: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formTarget = e.target as any;
    const data: IFormData = {
      email: formTarget.email.value,
      firstName: formTarget.firstName.value,
      lastName: formTarget.lastName.value,
      password: formTarget.password.value,
    };
    console.log(data);
  };

  useEffect(() => {
    console.log("Component Mount");
    return () => {
      console.log(`Component Unmount`);
    };
  }, []);

  return (
    <>
      <section>
        <div className="flex justify-center items-center h-[80vh] flex-col">
          <form className="" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label className="text-xl font-bold" htmlFor="firstName">
                First Name
              </label>
              <Input
                placeholder="type your first name"
                type="text"
                name="firstName"
                className="p-4 rounded-lg outline-none border-[1px] border-black w-[400px]"
                id="firstName"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xl font-bold" htmlFor="lastName">
                Last Name
              </label>
              <Input
                placeholder="type your last name"
                type="text"
                name="lastName"
                className="p-4 rounded-lg outline-none border-[1px] border-black w-[400px]"
                id="lastName"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xl font-bold" htmlFor="email">
                Email
              </label>
              <Input
                placeholder="type your email"
                type="email"
                name="email"
                className="p-4 rounded-lg outline-none border-[1px] border-black w-[400px]"
                id="email"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xl font-bold" htmlFor="password">
                Password
              </label>
              <Input
                placeholder="type your password"
                type="password"
                name="password"
                className="p-4 rounded-lg outline-none border-[1px] border-black w-[400px]"
                id="password"
              />
            </div>
            <Button
              className="bg-blue-400 text-black px-4 py-3 mt-6 rounded-md font-bold hover:opacity-[90%]"
              type="submit"
            >
              Signup
            </Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Signup;
