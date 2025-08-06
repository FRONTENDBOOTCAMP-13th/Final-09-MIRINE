"use client";

import { useCallback, useEffect, useState } from "react";
import styles from "./mypageSidebar.module.css";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

interface Option {
  value: string;
  label: string;
}

interface OptionGroup {
  title: string; //그룹 제목
  options: Option[];
}

interface SelectBoxProps {
  groups: OptionGroup[];
  defaultValue?: string; //기본 선택
  placeholder?: string;
  className?: string;
}

export default function MyPageSidebar({ groups, defaultValue, placeholder = "내 정보", className }: SelectBoxProps) {
  const [isOpen, setIsOpen] = useState(false); //드롭다운
  const [selectedValue, setSelectedValue] = useState(defaultValue || ""); //선택값

  const router = useRouter();
  const pathname = usePathname(); // 현재 경로 가져오기

  const findOptionByPath = useCallback(
    (path: string) => {
      for (const group of groups) {
        const found = group.options.find((opt) => opt.value === path);
        if (found) return found;
      }
      return null;
    },
    [groups]
  );

  useEffect(() => {
    const currentOption = findOptionByPath(pathname);
    if (currentOption) {
      setSelectedValue(currentOption.value);
    } else {
      if (pathname === "/mypage" && groups.length > 0 && groups[0].options.length > 0) {
        setSelectedValue(groups[0].options[0].value);
      }
    }
  }, [pathname, findOptionByPath, groups]);

  //드롭다운
  const toggleDropdown = () => setIsOpen(!isOpen);

  //옵션 선택 시 실행
  const handleOptionSelect = async (value: string) => {
    setSelectedValue(value);
    setIsOpen(false); //드롭다운 닫기

    router.push(`${value}`);
  };

  //선택값 라벨 찾기
  const getSelectedLabel = () => {
    for (const group of groups) {
      const found = group.options.find((opt) => opt.value === selectedValue);
      if (found) return found.label;
    }
    return placeholder;
  };

  return (
    <div className={`${styles.aside_dropdown} ${className || ""} ${isOpen && styles.active}`}>
      <button type="button" className={styles.dropdown_header} onClick={toggleDropdown}>
        <span className={styles.select_text}>{getSelectedLabel()}</span>
        <Image src="/icon/Icon-chevron-down.svg" alt="드롭다운 화살표" className={styles.icon} width={16} height={16} />
      </button>

      {/* 드롭다운 리스트 */}
      <ul className={styles.dropdown_list}>
        {groups.map((group, groupIndex) => (
          <li key={groupIndex} className={styles.option_group}>
            {/* 그룹 제목 */}
            <p className={styles.group_title}>{group.title}</p>
            {/* 리스트 */}
            <ul className={styles.option_list}>
              {group.options.map((option) => (
                <li key={option.value} className={`${styles.option_item} ${selectedValue === option.value ? styles.selected : ""}`} onClick={() => handleOptionSelect(option.value)} role="option" aria-selected={selectedValue === option.value}>
                  {option.label}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
