import React from "react";
import MDXComponents from "@theme-original/MDXComponents";
import Badge from "@site/src/components/Badge";
import DocCaution from "@site/src/components/DocCaution";
import OriginalLink from "@site/src/components/OriginalLink";
import ExperimentBlock from "@site/src/components/ExperimentBlock";
import Screenshot from "@site/src/components/Screenshot";
import ScreenshotBlock from "@site/src/components/ScreenshotBlock";
import ScreenshotBlockVertical from "@site/src/components/ScreenshotBlockVertical";
import ScreenshotTable from "@site/src/components/ScreenshotTable";
import ScreenshotTableList from "@site/src/components/ScreenshotTableList";
import ToContinueBookmark from "@site/src/components/ToContinueBookmark";

export default {
  // Re-use the default mapping
  ...MDXComponents,
  Badge,
  DocCaution,
  OriginalLink,
  ExperimentBlock,
  Screenshot,
  ScreenshotBlock,
  ScreenshotBlockVertical,
  ScreenshotTable,
  ScreenshotTableList,
  ToContinueBookmark,
};
