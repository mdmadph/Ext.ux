/**
 * @author		M D McNamara
 * @class		Ext.ux.form.NoPasteTextField
 * 
 */

Ext.define('Ext.ux.form.NoPasteTextField', {
	extend: 'Ext.form.field.Text',
	alias: 'widget.nopastetextfield',
	
	initComponent: function () {
		this.callParent(arguments);
	},
	
	afterRender: function() {
		var _field = this.getEl();
		
		_field.on('contextmenu', function (event) {
			event.stopEvent();
		});
		
		_field.on('keydown', function(field, event) {
			if (this.hasModifier() && !this.shiftKey) {
				this.stopEvent();
			}
		}, Ext.EventObject);
	}
});