/**
 * @author		M D McNamara
 * @class		Ext.ux.form.LargeRadioGroup
 *
 */

Ext.define('Ext.ux.form.LargeRadioGroup', {
	extend: 'Ext.form.RadioGroup',
	requires: [
		'Ext.form.field.Checkbox',
		'Ext.form.field.Radio'
	],
	alias: 'widget.largeradiogroup',
	msgTarget: 'side',
	
	initComponent: function () {
		var _newItem = null;
		this.items = [];
		
		Ext.each(this.extensionConfig.data, function(item) {
			_newItem = {
				name: this.extensionConfig.name
			};
			
			Ext.apply(_newItem, 
				(Ext.type(item) == "array" ?
				{inputValue: item[0], boxLabel: item[1]} :
				{inputValue: item, boxLabel: item})
			);
			
			// If any other properties are desired, they will be present in item[2]
			if (item[2]) {
				Ext.apply(_newItem, item[2]);
			}
			
			this.items.push(_newItem);
		}, this);
		
		this.callParent(arguments);
	}
});