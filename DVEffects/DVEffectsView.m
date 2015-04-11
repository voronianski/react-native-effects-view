#import "DVEffectsView.h"

@interface DVEffectsView ()

@property (nonatomic, strong) UIVisualEffectView *effectsView;

@end

@implementation DVEffectsView

- (instancetype)init
{
    self = [super init];
    return self;
}

- (void)layoutSubviews
{
    [super layoutSubviews];

    if ([self.subviews containsObject:self.effectsView] == NO) {
        UIBlurEffect *blurEffect = [self createBlurEffect];
        self.effectsView = [[UIVisualEffectView alloc] initWithEffect:blurEffect];
        [self.effectsView setFrame:self.bounds];
        [self insertSubview:self.effectsView atIndex:[self.subviews count]];

        if (self.vibrant == YES) {
            UIVibrancyEffect *vibrancyEffect = [UIVibrancyEffect effectForBlurEffect:blurEffect];
            UIVisualEffectView *vibrancyEffectView = [[UIVisualEffectView alloc] initWithEffect:vibrancyEffect];
            [vibrancyEffectView setFrame:self.bounds];

            // vibrancy view is always first
            [[vibrancyEffectView contentView] addSubview:self.subviews[0]];
            [[self.effectsView contentView] addSubview:vibrancyEffectView];
        }
    }
}

- (UIBlurEffect *)createBlurEffect
{
    UIBlurEffect *blurEffect;
    if ([self.blurStyle isEqualToString:@"extraLight"]) {
        blurEffect = [UIBlurEffect effectWithStyle:UIBlurEffectStyleExtraLight];
    } else if ([self.blurStyle isEqualToString:@"dark"]) {
        blurEffect = [UIBlurEffect effectWithStyle:UIBlurEffectStyleDark];
    } else {
        blurEffect = [UIBlurEffect effectWithStyle:UIBlurEffectStyleLight];
    }
    return blurEffect;
}

@end
