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
      Budget: {
        Row: {
          Budget_Id: string;
          Created_At: string;
          Created_By: string;
          Name: string;
          Organization_Id: string;
        };
        Insert: {
          Budget_Id?: string;
          Created_At?: string;
          Created_By: string;
          Name: string;
          Organization_Id: string;
        };
        Update: {
          Budget_Id?: string;
          Created_At?: string;
          Created_By?: string;
          Name?: string;
          Organization_Id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "Budget_Created_By_fkey";
            columns: ["Created_By"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "Budget_Organization_Id_fkey";
            columns: ["Organization_Id"];
            referencedRelation: "Organization";
            referencedColumns: ["Organization_Id"];
          }
        ];
      };
      Budget_Entry: {
        Row: {
          Amount: number;
          Budget_Id: string;
          Subcategory_Id: number;
        };
        Insert: {
          Amount: number;
          Budget_Id: string;
          Subcategory_Id: number;
        };
        Update: {
          Amount?: number;
          Budget_Id?: string;
          Subcategory_Id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "Budget_Entry_Budget_Id_fkey";
            columns: ["Budget_Id"];
            referencedRelation: "Budget";
            referencedColumns: ["Budget_Id"];
          },
          {
            foreignKeyName: "Budget_Entry_Subcategory_Id_fkey";
            columns: ["Subcategory_Id"];
            referencedRelation: "Subcategory";
            referencedColumns: ["Subcategory_Id"];
          }
        ];
      };
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
      Organization: {
        Row: {
          Created_At: string;
          Name: string;
          Organization_Id: string;
        };
        Insert: {
          Created_At?: string;
          Name: string;
          Organization_Id?: string;
        };
        Update: {
          Created_At?: string;
          Name?: string;
          Organization_Id?: string;
        };
        Relationships: [];
      };
      Organization_Membership: {
        Row: {
          Organization_Id: string;
          User_Id: string;
        };
        Insert: {
          Organization_Id: string;
          User_Id: string;
        };
        Update: {
          Organization_Id?: string;
          User_Id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "Organization_Membership_Organization_Id_fkey";
            columns: ["Organization_Id"];
            referencedRelation: "Organization";
            referencedColumns: ["Organization_Id"];
          },
          {
            foreignKeyName: "Organization_Membership_User_Id_fkey";
            columns: ["User_Id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
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
          Organization_Id: string;
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
          Organization_Id: string;
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
          Organization_Id?: string;
          Subcategory_Id?: number;
          Transaction_Date?: string;
          Transaction_Id?: string;
          User_Id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "Transaction_Organization_Id_fkey";
            columns: ["Organization_Id"];
            referencedRelation: "Organization";
            referencedColumns: ["Organization_Id"];
          },
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
      isinorganization: {
        Args: {
          _userid: string;
          _organizationid: string;
        };
        Returns: boolean;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
