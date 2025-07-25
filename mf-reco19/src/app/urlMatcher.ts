import {
  UrlMatcher,
  UrlMatchResult,
  UrlSegment,
  UrlSegmentGroup,
} from '@angular/router';

export const urlMatcher: UrlMatcher = (
  _: UrlSegment[],
  group: UrlSegmentGroup
): UrlMatchResult | null => {
  console.log(group);
  if (group.toString().includes('/p/')) {
    return { consumed: [] };
  }
  if (group.toString().includes('reco')) {
    return { consumed: [] };
  }
  return null;
};
