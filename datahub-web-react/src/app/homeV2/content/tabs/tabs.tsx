import { ActivityTab } from '@app/homeV2/content/tabs/activity/ActivityTab';
import { AnnouncementsTab } from '@app/homeV2/content/tabs/announcements/AnnouncementsTab';
import { DiscoveryTab } from '@app/homeV2/content/tabs/discovery/DiscoveryTab';
import {
    V2_HOME_PAGE_ANNOUNCEMENTS_ID,
    V2_HOME_PAGE_DISCOVER_ID,
} from '@app/onboarding/configV2/HomePageOnboardingConfig';

// todo: decide whether we want icons for each tab!

export enum TabType {
    Discover = 'Discover',
    Activity = 'Activity',
    Announcements = 'Announcements',
}

interface TabData {
    type: TabType;
    name: string;
    description: string;
    component: any;
    id?: string;
    icon?: JSX.Element;
}

export const tabs: TabData[] = [
    {
        type: TabType.Discover,
        name: 'Discover',
        description: 'Explore your data', // icon: CompassOutlined,
        component: DiscoveryTab,
        id: V2_HOME_PAGE_DISCOVER_ID,
    },
    {
        type: TabType.Activity,
        name: 'Activity',
        description: 'Recent activity for you', // icon: RocketOutlined,
        component: ActivityTab,
    },
    {
        type: TabType.Announcements,
        name: 'Announcements',
        description: 'Announcements from your organization', // icon: NotificationOutlined,
        component: AnnouncementsTab,
        id: V2_HOME_PAGE_ANNOUNCEMENTS_ID,
    },
];

export const TAB_NAME_DETAILS = new Map<TabType, TabData>();
tabs.forEach((tab) => TAB_NAME_DETAILS.set(tab.type, tab));

export const DEFAULT_TAB = TabType.Discover;
