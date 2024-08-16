"use client";
import { useMemo, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const HashElement: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  const hashElement = useMemo<HTMLElement | null>(() => {
    const hash = pathname.split("#")[1];

    const removeHashCharacter = (str: string) => {
      return str.slice(1);
    };

    if (hash) {
      const element = document.getElementById(removeHashCharacter(hash));
      return element;
    } else {
      return null;
    }
  }, [pathname]);

  useEffect(() => {
    if (hashElement) {
      hashElement.scrollIntoView({ behavior: "smooth" });
    }
  }, [hashElement]);

  return null;
};

export default HashElement;
