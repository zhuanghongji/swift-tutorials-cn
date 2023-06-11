import React from "react";
import MDXComponents from "@theme-original/MDXComponents";
import Badge from "@site/src/components/Badge";
import DocCaution from "@site/src/components/DocCaution";
import OriginalLink from "@site/src/components/OriginalLink";
import ScreenshotBlock from "@site/src/components/ScreenshotBlock";

export default {
  // Re-use the default mapping
  ...MDXComponents,
  Badge,
  DocCaution,
  OriginalLink,
  ScreenshotBlock,
};
