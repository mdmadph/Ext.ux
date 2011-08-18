/**
 * @author		M D McNamara
 * @class		Ext.ux.form.Phone
 *
 */

Ext.define('Ext.ux.form.Phone', {
	extend: 'Ext.form.field.Text',
	alias: 'widget.phone',
	
	statics: {
		validPhoneRegexMsg: "Please enter a valid phone number with area code.",
		PhoneMask: /\d|-/
	},
	
	initComponent: function () {
		if (!Ext.form.field.VTypes.phone) {
			Ext.apply(Ext.form.field.VTypes, {
				phone: function (val) {
					return (/^\d{3}\-\d{3}\-\d{4}$/).test(val);
				},
				phoneText: this.self.validPhoneRegexMsg,
				phoneMask: this.self.PhoneMask
			});
		}
		
		Ext.apply(this, {
			vtype: 'phone',
			maxLength: 12,
			enforceMaxLength: true
		});
		
		this.callParent(arguments);
	}
});