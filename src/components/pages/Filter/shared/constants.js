export const conditions = {
    ItemLevel: 'NumericOperator',
    DropLevel: 'NumericOperator',
    Quality: 'NumericOperator',
    Rarity: 'Rarity',
    Class: 'Text',
    BaseType: 'Text',
    Sockets: 'NumericOperator',
    LinkedSockets: 'NumericOperator',
    SocketGroup: 'SocketGroup',
    Height: 'NumericOperator',
    Width: 'NumericOperator',
    HasExplicitMod: 'Text',
    StackSize: 'NumericOperator',
    GemLevel: 'NumericOperator',
    Identified: 'Boolean',
    Corrupted: 'Boolean',
    ElderItem: 'Boolean',
    ShaperItem: 'Boolean',
    ShapedMap: 'Boolean',
    MapTier: 'NumericOperator',
    AnyEnchantment: 'Boolean',
    HasEnchantment: 'Text',
    FracturedItem: 'Boolean',
    SynthesisedItem: 'Boolean',
};

export const actions = {
    SetBorderColor: 'Color',
    SetTextColor: 'Color',
    SetBackgroundColor: 'Color',
    SetFontSize: 'FontSize',
    PlayAlertSound: 'AlertSound',
    PlayAlertSoundPositional: 'AlertSound',
    DisableDropSound: 'Simple',
    CustomAlertSound: 'AlertSoundFile',
    MinimapIcon: 'Icon',
    PlayEffect: 'Effect',
};

export const defaultValues = {
    textColor: [200, 200, 200, 255],
    backgroundColor: [0, 0, 0, 203],
    borderColor: [0, 0, 0, 0],
};