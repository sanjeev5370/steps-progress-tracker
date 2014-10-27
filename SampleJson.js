var sampleJson1 = {
    ToolTipPosition: "bottom",
    data: [{ order: 1, Text: "Foo", ToolTipText: "Step1-Foo", highlighted: true },
        { order: 2, Text: "Bar", ToolTipText: "Step2-Bar", highlighted: true },
        { order: 3, Text: "Baz", ToolTipText: "Step3-Baz", highlighted: false },
        { order: 4, Text: "Quux", ToolTipText: "Step4-Quux", highlighted: false }]
};


var sampleJson2 = {
    ToolTipPosition: "top",
    ShowToolTip: false,
    data: [{ order: 1, Text: "Foo", ToolTipText: "Step1-Foo", highlighted: true },
        { order: 2, Text: "Bar", ToolTipText: "Step2-Bar", highlighted: true },
        { order: 3, Text: "Baz", ToolTipText: "Step3-Baz", highlighted: false },
        { order: 4, Text: "Quux", ToolTipText: "Step4-Quux", highlighted: false }]
};

var sampleJson3 = {
    ToolTipPosition: "top",
    ShowToolTip: true,
    data: [{ "order": 1, "Text": "Saved", "ToolTipText": "By PQR ", "highlighted": true },
        { "order": 2, "Text": "Pending Team Lead Review", "ToolTipText": "By XYZ", "highlighted": true },
        { "order": 3, "Text": "Pending Manager Review", "ToolTipText": "By ABC on Jul 14, 2014", "highlighted": true },
        { "order": 4, "Text": "Pending CRB Review", "ToolTipText": "", "highlighted": false },
        { "order": 5, "Text": "In Signature Cycle", "ToolTipText": "", "highlighted": false },
        { "order": 6, "Text": "Approved", "ToolTipText": "", "highlighted": false }]
};

var sampleJson4 = {
    ToolTipPosition: "left",
    data: [{ order: 1, Text: "Foo", ToolTipText: "Step1-Foo", highlighted: true },
        { order: 2, Text: "Bar", ToolTipText: "Step2-Bar", highlighted: true },
        { order: 3, Text: "Baz", ToolTipText: "Step3-Baz", highlighted: false },
        { order: 4, Text: "Quux", ToolTipText: "Step4-Quux", highlighted: false }]
};
