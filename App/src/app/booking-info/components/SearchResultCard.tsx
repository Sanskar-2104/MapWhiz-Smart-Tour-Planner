"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface SearchResultCardProps {
  title: string;
  subtitle: string;
  details: string;
  price: string;
}

export default function SearchResultCard({
  title,
  subtitle,
  details,
  price,
}: SearchResultCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="rounded-xl shadow-md hover:shadow-lg transition border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
        <CardContent className="p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {subtitle}
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
              {details}
            </p>
          </div>

          <div className="flex flex-col items-end">
            <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
              {price}
            </p>
            <button className="mt-2 px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition">
              Book Now
            </button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

