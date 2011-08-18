/**
 * @author		M D McNamara
 * @class		Ext.ux.form.CityStateZip
 *
 */

Ext.define('Ext.ux.form.CityStateZip', {
	extend: 'Ext.form.FieldContainer',
	requires: [
 		'Ext.resizer.Splitter',
 		'Ext.form.field.Text',
 		'Ext.form.field.ComboBox'
	],
	alias: 'widget.citystatezip',
	layout: 'hbox',
	fieldLabel: 'City, State, Zip',
	msgTarget: 'side',
	
	defaults: {
		hideLabel: true
	},
	
	initComponent: function () {
		var _cfg = this.extensionConfig;
		
		this.items = [
			Ext.Object.merge({
				xtype: 'textfield',
				emptyText: 'City',
				flex: 1
			}, _cfg[0]),
			{xtype: 'splitter'},
			Ext.Object.merge({
				xtype: "combo",
				store: this.getStates(),
				forceSelection: true, typeAhead: true, 
				selectOnFocus: true, triggerAction: "all",
				width: 40
			}, _cfg[1]),
			{xtype: 'splitter'},
			Ext.Object.merge({
				xtype: "numberfield",
				enforceMaxLength: true,
				regex: /^\d{5}$/,
				regexText: "Please enter a five digit ZIP Code",
				maxLength: 5,
				width: 60,
				hideTrigger: true,
        		keyNavEnabled: false,
        		mouseWheelEnabled: false
			}, _cfg[2])
		];	
		this.callParent(arguments);
	},
	
	getStates: function () {
		return [
			"AL",
			"AK",
			"AZ",
			"AR",
			"CA",
			"CO",
			"CT",
			"DE",
			"DC",
			"FL",
			"GA",
			"HI",
			"ID",
			"IL",
			"IN",
			"IA",
			"KS",
			"KY",
			"LA",
			"ME",
			"MD",
			"MA",
			"MI",
			"MN",
			"MS",
			"MO",
			"MT",
			"NE",
			"NV",
			"NH",
			"NJ",
			"NM",
			"NY",
			"NC",
			"ND",
			"OH",
			"OK",
			"OR",
			"PA",
			"RI",
			"SC",
			"SD",
			"TN",
			"TX",
			"UT",
			"VT",
			"VA",
			"WA",
			"WV",
			"WI",
			"WY"
		];
	}
});