"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function StatusPageWidget() {
  const [statusData, setStatusData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_STATUS_PAGE_API_URL) return;

    async function fetchStatus() {
      try {
        const response = await fetch(
          process.env.NEXT_PUBLIC_STATUS_PAGE_API_URL,
        );
        if (!response.ok) {
          throw new Error("Failed to fetch status data");
        }
        const data = await response.json();
        setStatusData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchStatus();
  }, []);

  if (!process.env.NEXT_PUBLIC_STATUS_PAGE_API_URL) {
    return <div></div>;
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center space-x-2 transition-opacity duration-100 hover:opacity-80">
        Loading Systems Status...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center space-x-2 transition-opacity duration-100 hover:opacity-80">
        <div className="relative">
          <div
            className={`h-3 w-3 rounded-full bg-neutral-500 animate-ping`}
          ></div>
          <div
            className={`absolute top-0 h-3 w-3 rounded-full bg-neutral-500`}
          ></div>
        </div>
        <p className="text-sm font-light text-neutral-600">
          Unknown Systems Status
        </p>
      </div>
    );
  }

  const hasIncidents = statusData.ongoing_incidents.length > 0;
  const hasMaintenances =
    statusData.in_progress_maintenances.length > 0 ||
    statusData.scheduled_maintenances.length > 0;

  let status = "operational";
  let statusText = "All Systems Operational";
  let badgeColor = "bg-green-500";

  if (hasIncidents) {
    status = "issues";
    statusText = "Ongoing Issues Detected";
    badgeColor = "bg-red-500";
  } else if (hasMaintenances) {
    status = "maintenance";
    statusText = "Maintenance Scheduled";
    badgeColor = "bg-yellow-500";
  }

  return (
    <Link
      className="flex items-center justify-center space-x-2 transition-opacity duration-100 hover:opacity-80"
      rel="noopener noreferrer"
      target="_blank"
      href={statusData.page_url}
    >
      <div className="relative">
        <div
          className={`h-3 w-3 rounded-full ${badgeColor} animate-ping`}
        ></div>
        <div
          className={`absolute top-0 h-3 w-3 rounded-full ${badgeColor}`}
        ></div>
      </div>
      <p className="text-sm font-light text-neutral-600">{statusText}</p>
    </Link>
  );
}
