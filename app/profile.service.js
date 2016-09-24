System.register(["./profile"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var profile_1;
    var ProfileService;
    return {
        setters:[
            function (profile_1_1) {
                profile_1 = profile_1_1;
            }],
        execute: function() {
            ProfileService = (function () {
                function ProfileService() {
                    this.profiles = [
                        new profile_1.Profile('Default Profile', ['Auckland'])
                    ];
                }
                ProfileService.prototype.saveNewProfile = function (cities) {
                    var profileName = 'Profile ' + this.profiles.length;
                    var profile = new profile_1.Profile(profileName, cities);
                    this.profiles.push(profile);
                };
                ProfileService.prototype.getProfiles = function () {
                    return this.profiles;
                };
                ProfileService.prototype.deleteProfile = function (profile) {
                    this.profiles.splice(this.profiles.indexOf(profile), 1);
                };
                return ProfileService;
            }());
            exports_1("ProfileService", ProfileService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztZQUVBO2dCQUFBO29CQUNZLGFBQVEsR0FBYzt3QkFDMUIsSUFBSSxpQkFBTyxDQUFDLGlCQUFpQixFQUFFLENBQUMsVUFBVSxDQUFDLENBQUM7cUJBQy9DLENBQUM7Z0JBZU4sQ0FBQztnQkFiRyx1Q0FBYyxHQUFkLFVBQWUsTUFBZ0I7b0JBQzNCLElBQU0sV0FBVyxHQUFHLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztvQkFDdEQsSUFBTSxPQUFPLEdBQUcsSUFBSSxpQkFBTyxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQztvQkFDakQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2hDLENBQUM7Z0JBRUQsb0NBQVcsR0FBWDtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDekIsQ0FBQztnQkFFRCxzQ0FBYSxHQUFiLFVBQWMsT0FBZ0I7b0JBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM1RCxDQUFDO2dCQUNMLHFCQUFDO1lBQUQsQ0FsQkEsQUFrQkMsSUFBQTtZQWxCRCwyQ0FrQkMsQ0FBQSIsImZpbGUiOiJwcm9maWxlLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1Byb2ZpbGV9IGZyb20gXCIuL3Byb2ZpbGVcIjtcblxuZXhwb3J0IGNsYXNzIFByb2ZpbGVTZXJ2aWNlIHtcbiAgICBwcml2YXRlIHByb2ZpbGVzOiBQcm9maWxlW10gPSBbXG4gICAgICAgIG5ldyBQcm9maWxlKCdEZWZhdWx0IFByb2ZpbGUnLCBbJ0F1Y2tsYW5kJ10pXG4gICAgXTtcblxuICAgIHNhdmVOZXdQcm9maWxlKGNpdGllczogc3RyaW5nW10pIHtcbiAgICAgICAgY29uc3QgcHJvZmlsZU5hbWUgPSAnUHJvZmlsZSAnICsgdGhpcy5wcm9maWxlcy5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHByb2ZpbGUgPSBuZXcgUHJvZmlsZShwcm9maWxlTmFtZSwgY2l0aWVzKTsgXG4gICAgICAgIHRoaXMucHJvZmlsZXMucHVzaChwcm9maWxlKTtcbiAgICB9XG5cbiAgICBnZXRQcm9maWxlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvZmlsZXM7XG4gICAgfVxuXG4gICAgZGVsZXRlUHJvZmlsZShwcm9maWxlOiBQcm9maWxlKSB7XG4gICAgICAgIHRoaXMucHJvZmlsZXMuc3BsaWNlKHRoaXMucHJvZmlsZXMuaW5kZXhPZihwcm9maWxlKSwgMSk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
