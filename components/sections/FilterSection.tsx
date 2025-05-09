'use client'

import { UserIcon, FileText, Calendar, CreditCard } from "lucide-react";
import Filter from "@/registry/default/filter/filter";
import { FilterOption, FilterCriteria } from "@/registry/default/filter/lib/types";
import { SectionLayout } from "@/components/ui/section-layout";
import { useState } from "react";
import { DownloadComponent } from "@/components/download-component";
const codeExampleString = `import { UserIcon } from "lucide-react";
import Filter from "@/registry/default/filter/filter";

const filterOptions = [
  {
    type: "user",
    label: "المستخدم",
    icon: UserIcon,
    values: [
      { id: "admin", label: "مدير" },
      { id: "user", label: "مستخدم" }
    ],
    conditions: [
      { id: "is", label: "يكون" },
      { id: "isNot", label: "ليس" }
    ]
  }
];

const handleFilterChange = (filters: FilterCriteria[]) => {
  console.log("Filters changed:", filters);
  const urlParams = filters.map(filter => {
    const { type, condition, value } = filter;
    return \`\${type}=\${condition}:\${value}\`;
  }).join("&");
  console.log(urlParams);
};

export default function FilterExample() {
  return (
    <Filter 
      options={filterOptions} 
      onFilterChange={handleFilterChange}
      className="mb-8"
    />
  );
}`;

const filterOptions: FilterOption[] = [
  {
    type: "user",
    label: "المستخدم",
    icon: UserIcon,
    values: [
      { id: "admin", label: "مدير" },
      { id: "user", label: "مستخدم" },
      { id: "guest", label: "ضيف" }
    ],
    conditions: [
      { id: "is", label: "يكون" },
      { id: "isNot", label: "ليس" }
    ]
  },
  {
    type: "document",
    label: "المستند",
    icon: FileText,
    values: [
      { id: "pdf", label: "PDF" },
      { id: "doc", label: "Word" },
      { id: "xls", label: "Excel" }
    ],
    conditions: [
      { id: "equals", label: "يساوي" },
      { id: "contains", label: "يحتوي" }
    ]
  },
  {
    type: "date",
    label: "التاريخ",
    icon: Calendar,
    values: [
      { id: "today", label: "اليوم" },
      { id: "yesterday", label: "الأمس" },
      { id: "thisWeek", label: "هذا الأسبوع" }
    ],
    conditions: [
      { id: "is", label: "يكون" },
      { id: "after", label: "بعد" },
      { id: "before", label: "قبل" }
    ]
  },
  {
    type: "payment",
    label: "الدفع",
    icon: CreditCard,
    values: [
      { id: "card", label: "بطاقة ائتمان" },
      { id: "cash", label: "نقداً" },
      { id: "transfer", label: "تحويل بنكي" }
    ],
    conditions: [
      { id: "is", label: "يكون" },
      { id: "isNot", label: "ليس" }
    ]
  }
];

const FilterSection = () => {
  const [filterOutPutUrl, setFilterOutPutUrl] = useState("");
  const handleFilterChange = (filters: FilterCriteria[]) => {
    console.log("Filters changed:", filters);
    const urlParams = filters.map(filter => {
      const { type, condition, value } = filter;
      return `${type}=${condition}:${value}`;
    }).join("&");
    setFilterOutPutUrl(urlParams);
  };

  return (
    <SectionLayout
      title="عنصر التصفية"
      subtitle="تجربة عنصر التصفية"
      description="يمكن استخدام عنصر التصفية لتصفية البيانات في الجداول والقوائم والمخططات. يتيح للمستخدم إنشاء مجموعة من معايير التصفية بطريقة سهلة وبديهية."
      codeExample={codeExampleString}
    >
      <Filter 
        options={filterOptions} 
        onFilterChange={handleFilterChange}
        className="mb-8"
      />
      <span>{filterOutPutUrl}</span>
      <DownloadComponent componentName="filter" />
    </SectionLayout>
  );
};

export default FilterSection;