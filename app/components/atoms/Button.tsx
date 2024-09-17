import * as React from "react";

type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl"
type ButtonColor = "primary" | "secondary" | "default";
type ButtonType = "button" | "submit" | "reset";

type Props = {
  size: ButtonSize;
  color?: ButtonColor;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  href?: string;
  htmlType?: ButtonType;
  children: React.ReactNode;
};

const Button: React.FC<Props> = ({ size="md", color="default", onClick, children, htmlType="button" }) => {
  // 사이즈에 따른 패딩 값
  const sizeMap = {
    xs: { width: "w-12", height: "h-8" },
    sm: { width: "w-12", height: "h-8" },
    md: { width: "w-14", height: "h-9" },
    lg: { width: "w-14", height: "h-9" },
    xl: { width: "w-16", height: "h-10" },
  };
  const { width: width, height: height } = sizeMap[size] || sizeMap[size];

  // 글자 색상
  const textColor = 
    color === "primary" ? "text-white" :
    color === "secondary" ? "text-black" : "text-black";
  
  // 버튼 색상
  const backgroundColor =
    color === "primary" ? "bg-primary" :
    color === "secondary" ? "bg-green-500" : "bg-gray-500";

  return (
    <button onClick={onClick} type={htmlType} className={`${width} ${height} flex items-center justify-center rounded-lg ${backgroundColor} ${textColor}`}>
      {children}
    </button>
  );
};

export default Button;