import React from "react";
import { t } from "ttag";
import MetabaseSettings from "metabase/lib/settings";
import { Description, Link, LinkIcon } from "./SettingsCloudStoreLink.styled";

export function SettingsCloudStoreLink() {
  const url = MetabaseSettings.storeUrl();
  return (
    <div>
      <Description>{t`Manage your Cloud account, including billing preferences and technical settings about this instance in your DataMan Store account.`}</Description>
      <Link href={url}>
        {t`Go to the DataMan Store`}
        <LinkIcon name="external" />
      </Link>
    </div>
  );
}
