export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      Category: {
        Row: {
          Category_Id: number;
          Description: string;
        };
        Insert: {
          Category_Id?: number;
          Description: string;
        };
        Update: {
          Category_Id?: number;
          Description?: string;
        };
        Relationships: [];
      };
      Subcategory: {
        Row: {
          Category_Id: number;
          Description: string;
          Subcategory_Id: number;
        };
        Insert: {
          Category_Id: number;
          Description: string;
          Subcategory_Id?: number;
        };
        Update: {
          Category_Id?: number;
          Description?: string;
          Subcategory_Id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "Subcategory_Category_Id_fkey";
            columns: ["Category_Id"];
            referencedRelation: "Category";
            referencedColumns: ["Category_Id"];
          }
        ];
      };
      Transaction: {
        Row: {
          Credit_Amount: number | null;
          Debit_Amount: number | null;
          Description: string | null;
          Entry_Date: string;
          Location: string;
          Subcategory_Id: number;
          Transaction_Date: string;
          Transaction_Id: string;
          User_Id: string;
        };
        Insert: {
          Credit_Amount?: number | null;
          Debit_Amount?: number | null;
          Description?: string | null;
          Entry_Date?: string;
          Location: string;
          Subcategory_Id: number;
          Transaction_Date: string;
          Transaction_Id?: string;
          User_Id: string;
        };
        Update: {
          Credit_Amount?: number | null;
          Debit_Amount?: number | null;
          Description?: string | null;
          Entry_Date?: string;
          Location?: string;
          Subcategory_Id?: number;
          Transaction_Date?: string;
          Transaction_Id?: string;
          User_Id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "Transaction_Subcategory_Id_fkey";
            columns: ["Subcategory_Id"];
            referencedRelation: "Subcategory";
            referencedColumns: ["Subcategory_Id"];
          },
          {
            foreignKeyName: "Transaction_User_Id_fkey";
            columns: ["User_Id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
