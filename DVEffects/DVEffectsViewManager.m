#import "DVEffectsViewManager.h"

@implementation DVEffectsViewManager

RCT_EXPORT_MODULE();

- (UIView *)view
{
    return [[DVEffectsView alloc] init];
}

RCT_EXPORT_VIEW_PROPERTY(blurStyle, NSString);
RCT_EXPORT_VIEW_PROPERTY(vibrant, BOOL);

@end
