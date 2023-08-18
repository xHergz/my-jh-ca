"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

import Button from "@/components/common/button";
import Card from "@/components/common/card";
import Input from "@/components/common/input";
import Text from "@/components/common/text";

export type LoginFormProps = {};

const LoginForm: React.FunctionComponent<LoginFormProps> = (
  props: LoginFormProps
): JSX.Element => {
  const supabase = createClientComponentClient();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const logIn = async () => {
    const res = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (res.error) {
      setError("Login failed");
      setTimeout(() => {
        setError("");
      }, 3000);
    } else {
      router.push("/household/transactions/new");
    }
  };

  return (
    <Card>
      <form className="flex flex-col gap-4">
        <label>Email:</label>
        <Input onChange={setEmail} />
        <label>Password:</label>
        <Input type="password" onChange={setPassword} />
      </form>
      <Button onClick={logIn}>Log In</Button>
      <Text variant="p" color="error">
        {error}
      </Text>
    </Card>
  );
};

export default LoginForm;
