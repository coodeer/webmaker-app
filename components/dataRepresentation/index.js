module.exports = {
    id: 'dataRepresentation',
    template: require('./index.html'),
    data: {
        allRead: false,
        isInteractive: true,
        sortOldest: false,
        sortKey: 'submitted'
    },
    methods: {
        formatUnixTime: function(unix) {
            var date = new Date(unix);
            return date.toString();
        },
        notifyToggleRead: function() {
            var allRead = this.allRead;
            var dataSet = this.$data.dataSet;
            var allDataRead = true;
            for (i = 0; i < dataSet.length; i++) {
                var data = dataSet[i];
                if (data && !data.isRead) allRead = false;
            }
            allRead = allDataRead;
        },
        toggleReadAll: function() {
            this.allRead = !this.allRead;
            var allRead = this.allRead;
            var dataSet = this.$data.dataSet;
            for (i = 0; i < dataSet.length; i++) {
                var data = dataSet[i];
                if (data) data.isRead = allRead;
            }
        },
        removeSelected: function()
        {
            var dataSet = this.$data.dataSet;
            for (i = 0; i < dataSet.length; i++) {
                var data = dataSet[i];
                if (data && data.isRead) {
                    dataSet.$remove(i);
                }
            }
            //this.toggleReadAll();
        }
    }
};
