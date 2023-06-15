import React from "react";
import MDXComponents from "@theme-original/MDXComponents";
import Badge from "@site/src/components/Badge";
import DocCaution from "@site/src/components/DocCaution";
import OriginalLink from "@site/src/components/OriginalLink";
import ExperimentBlock from "@site/src/components/ExperimentBlock";
import ScreenshotBlock from "@site/src/components/ScreenshotBlock";
import ToContinueBookmark from "@site/src/components/ToContinueBookmark";

export default {
  // Re-use the default mapping
  ...MDXComponents,
  Badge,
  DocCaution,
  OriginalLink,
  ExperimentBlock,
  ScreenshotBlock,
  ToContinueBookmark,
};
