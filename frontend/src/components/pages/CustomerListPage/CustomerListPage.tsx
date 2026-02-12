import { useState } from "react";
import { Header } from "@/components/common/modules/Header/Header";
import { PageTitle } from "@/components/common/elements/PageTitle/PageTitle";
import { renderCustomerListContent } from "./renderCustomerListContent";

export const CustomerListPage=()=>{
  const [keyword,setKeyword]=useState("");
  return <section><Header /><PageTitle title="顧客一覧" /><input aria-label="keyword" placeholder="キーワード" value={keyword} onChange={(e)=>setKeyword(e.target.value)} />{renderCustomerListContent(keyword)}</section>;
};
