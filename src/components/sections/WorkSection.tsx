import WorkScrollShowcase from "@/components/sections/WorkScrollShowcase";

// The section heading and "See All Projects" link now live inside
// WorkScrollShowcase itself, pinned over its backdrop — see PinnedHeading
// there — instead of sitting in a separate header above it.
export default function WorkSection() {
  return <WorkScrollShowcase />;
}
