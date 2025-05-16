"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";

interface ComponentModalProps {
  isOpen: boolean;
  onClose: () => void;
  component: {
    id: number;
    title: string;
    description: string;
    image: string;
    fullDescription?: string;
    specifications?: string[];
    applications?: string[];
  };
}

export function ComponentModal({
  isOpen,
  onClose,
  component,
}: ComponentModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {component.title}
          </DialogTitle>
        </DialogHeader>

        <div className="w-full h-[300px] relative rounded-lg overflow-hidden my-4">
          <Image
            src={component.image}
            alt={component.title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            priority
          />
        </div>

        <div className="space-y-6 py-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Overview</h3>
            <p className="text-gray-700">{component.description}</p>
          </div>

          {component.fullDescription && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Details</h3>
              <p className="text-gray-600">{component.fullDescription}</p>
            </div>
          )}

          {component.specifications && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Specifications</h3>
              <div className="flex flex-wrap gap-2">
                {component.specifications.map((spec) => (
                  <span
                    key={spec}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          )}

          {component.applications && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Applications</h3>
              <div className="flex flex-wrap gap-2">
                {component.applications.map((app) => (
                  <span
                    key={app}
                    className="px-3 py-1 bg-green-100 rounded-full text-sm"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
