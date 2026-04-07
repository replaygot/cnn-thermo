"use client";

import { Button } from "@/components/ui";
import { useModal } from "@/components/ModalProvider";

export default function ProductClientWrapper({ productName }: { productName: string }) {
  const { open } = useModal();

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      {/* Дефолтный Button уже кирпичный через ui.tsx */}
      <Button
        onClick={() => open("request", { productName })}
        className="flex-1 font-bold py-4 text-lg shadow-lg border-0"
      >
        Оставить заявку
      </Button>
      <Button
        variant="outline"
        onClick={() => open("call")}
        className="flex-1 bg-transparent border-border text-foreground hover:bg-secondary py-4"
      >
        Консультация
      </Button>
    </div>
  );
}