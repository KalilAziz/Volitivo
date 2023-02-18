import { Form } from "@/components/form";
import Image from 'next/image';
import Link from "next/link";
import logoImage from "@/public/logo.jpeg";

const Login = () => {
  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link href="/">
        <Image
            className="mx-auto h-12 w-auto"
            src={logoImage}
            alt="Your Company"
            width={100}
            height={100}
          />
        </Link>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or{" "}
          <a
            href="#"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            start your 14-day free trial
          </a>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <Form type="login" />
        </div>
      </div>
    </div>
  );
};

export default Login;
