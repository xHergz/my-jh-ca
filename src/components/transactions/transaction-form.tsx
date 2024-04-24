"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { FormEvent, useRef, useState } from "react";

import Button from "@/components/common/button";
import Input from "@/components/common/input";
import Text from "@/components/common/text";
import { Category } from "@/types/category.types";
import { Subcategory } from "@/types/subcategory.types";
import { Database } from "@/types/supabase.types";
import Select, { SelectOption } from "../common/select";
import { useRouter } from "next/navigation";
import { useAuth } from "@/utils/auth.utils";

export type TransactionFormProps = {
  categories: Category[];
  subcategories: Subcategory[];
};

const TransactionForm: React.FunctionComponent<TransactionFormProps> = ({
  categories,
  subcategories,
}: TransactionFormProps): JSX.Element => {
  const supabase = createClientComponentClient<Database>();
  const router = useRouter();
  const user = useAuth();
  const [category, setCategory] = useState<string>(
    categories[0].Category_Id.toString() ?? ""
  );
  const [subcategory, setSubcategory] = useState<string>(
    subcategories
      .filter((sub) => sub.Category_Id === categories[0].Category_Id)[0]
      .Subcategory_Id.toString() ?? ""
  );
  const [location, setLocation] = useState<string>("");
  const [debitAmount, setDebitAmount] = useState<string>("");
  const [creditAmount, setCreditAmount] = useState<string>("");
  const [transactionDate, setTransactionDate] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [saveInProgress, setSaveInProgress] = useState<boolean>(false);
  const locationRef = useRef<HTMLInputElement>(null);
  const debitRef = useRef<HTMLInputElement>(null);
  const creditRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);

  const clearForm = () => {
    locationRef.current!.value = "";
    debitRef.current!.value = "";
    creditRef.current!.value = "";
    descriptionRef.current!.value = "";
    setLocation("");
    setDebitAmount("");
    setCreditAmount("");
    setDescription("");
  };

  const onCategoryChange = (newCategoryId: string) => {
    setCategory(newCategoryId);
    setSubcategory(
      subcategories
        .filter((sub) => sub.Category_Id.toString() === newCategoryId)
        .map((sub) => sub.Subcategory_Id.toString())[0]
    );
  };

  const submitTransaction = async (event: FormEvent<HTMLFormElement>) => {
    // Stop the page from reloading on form submit
    event.preventDefault();
    event.stopPropagation();

    if (!user) {
      return;
    }

    setSaveInProgress(true);
    const { error } = await supabase.from("Transaction").insert({
      Subcategory_Id: parseInt(subcategory),
      Location: location,
      Transaction_Date: transactionDate,
      Debit_Amount: debitAmount !== "" ? parseFloat(debitAmount) : null,
      Credit_Amount: creditAmount !== "" ? parseFloat(creditAmount) : null,
      Description: description,
      User_Id: user.id,
      Organization_Id: "0bdb2902-cc2d-4921-85b7-cab68e0fcac3",
    });

    if (error) {
      setError(error.message);
      console.error(error);
      setTimeout(() => {
        setError("");
      }, 3000);
    } else {
      clearForm();
      locationRef.current?.focus();
      router.refresh();
    }
    setSaveInProgress(false);
  };

  return (
    <div className="flex flex-col gap-2">
      <form className="flex flex-col gap-4" onSubmit={submitTransaction}>
        <label>Category:</label>
        <Select onChange={onCategoryChange}>
          {categories.map((category) => (
            <SelectOption
              key={category.Category_Id.toString()}
              value={category.Category_Id.toString()}
            >
              {category.Description}
            </SelectOption>
          ))}
        </Select>
        <label>Subcategory:</label>
        <Select onChange={setSubcategory}>
          {subcategories
            .filter((sub) => sub.Category_Id.toString() === category)
            .map((subcategory) => (
              <SelectOption
                key={subcategory.Subcategory_Id}
                value={subcategory.Subcategory_Id.toString()}
              >
                {subcategory.Description}
              </SelectOption>
            ))}
        </Select>
        <label>Location:</label>
        <Input onChange={setLocation} ref={locationRef} />
        <label>Debit Amount:</label>
        <Input onChange={setDebitAmount} ref={debitRef} />
        <label>Credit Amount:</label>
        <Input onChange={setCreditAmount} ref={creditRef} />
        <label>Transaction Date:</label>
        <Input onChange={setTransactionDate} type="date" />
        <label>Description:</label>
        <Input onChange={setDescription} ref={descriptionRef} />
        <Button type="submit" disabled={saveInProgress}>
          Submit
        </Button>
      </form>
      <Text variant="p" color="error">
        {error}
      </Text>
    </div>
  );
};

export default TransactionForm;
